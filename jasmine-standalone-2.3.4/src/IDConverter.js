function unpack(format, data) {
  // http://kevin.vanzonneveld.net
  // +   original by: Tim de Koning (http://www.kingsquare.nl)
  // +      parts by: Jonas Raoni Soares Silva - http://www.jsfromhell.com
  // +      parts by: Joshua Bell - http://cautionsingularityahead.blogspot.nl/
  // +
  // +   bugfixed by: marcuswestin
  // %        note 1: Float decoding by: Jonas Raoni Soares Silva
  // %        note 2: Home: http://www.kingsquare.nl/blog/22-12-2009/13650536
  // %        note 3: Feedback: phpjs-unpack@kingsquare.nl
  // %        note 4: 'machine dependant byte order and size' aren't
  // %        note 5: applicable for JavaScript unpack works as on a 32bit,
  // %        note 6: little endian machine
  // *     example 1: unpack('d', "\u0000\u0000\u0000\u0000\u00008YÀ");
  // *     returns 1: { "": -100.875 }

  var formatPointer = 0, dataPointer = 0, result = {}, instruction = '',
      quantifier = '', label = '', currentData = '', i = 0, j = 0,
      word = '', fbits = 0, ebits = 0, dataByteLength = 0;

  // Used by float decoding - by Joshua Bell
    //http://cautionsingularityahead.blogspot.nl/2010/04/javascript-and-ieee754-redux.html
  var fromIEEE754 = function(bytes, ebits, fbits) {
    // Bytes to bits
    var bits = [];
    for (var i = bytes.length; i; i -= 1) {
      var byte = bytes[i - 1];
      for (var j = 8; j; j -= 1) {
        bits.push(byte % 2 ? 1 : 0); byte = byte >> 1;
      }
    }
    bits.reverse();
    var str = bits.join('');

    // Unpack sign, exponent, fraction
    var bias = (1 << (ebits - 1)) - 1;
    var s = parseInt(str.substring(0, 1), 2) ? -1 : 1;
    var e = parseInt(str.substring(1, 1 + ebits), 2);
    var f = parseInt(str.substring(1 + ebits), 2);

    // Produce number
    if (e === (1 << ebits) - 1) {
      return f !== 0 ? NaN : s * Infinity;
    }
    else if (e > 0) {
      return s * Math.pow(2, e - bias) * (1 + f / Math.pow(2, fbits));
    }
    else if (f !== 0) {
      return s * Math.pow(2, -(bias-1)) * (f / Math.pow(2, fbits));
    }
    else {
      return s * 0;
    }
  }

  while (formatPointer < format.length) {
    instruction = format.charAt(formatPointer);

    // Start reading 'quantifier'
    quantifier = '';
    formatPointer++;
    while ((formatPointer < format.length) &&
        (format.charAt(formatPointer).match(/[\d\*]/) !== null)) {
      quantifier += format.charAt(formatPointer);
      formatPointer++;
    }
    if (quantifier === '') {
      quantifier = '1';
    }


    // Start reading label
    label = '';
    while ((formatPointer < format.length) &&
        (format.charAt(formatPointer) !== '/')) {
      label += format.charAt(formatPointer);
      formatPointer++;
    }
    if (format.charAt(formatPointer) === '/') {
      formatPointer++;
    }

    // Process given instruction
    switch (instruction) {
      case 'a': // NUL-padded string
      case 'A': // SPACE-padded string
        if (quantifier === '*') {
          quantifier = data.length - dataPointer;
        } else {
          quantifier = parseInt(quantifier, 10);
        }
        currentData = data.substr(dataPointer, quantifier);
        dataPointer += quantifier;

        if (instruction === 'a') {
          currentResult = currentData.replace(/\0+$/, '');
        } else {
          currentResult = currentData.replace(/ +$/, '');
        }
        result[label] = currentResult;
        break;

      case 'h': // Hex string, low nibble first
      case 'H': // Hex string, high nibble first
        if (quantifier === '*') {
          quantifier = data.length - dataPointer;
        } else {
          quantifier = parseInt(quantifier, 10);
        }
        currentData = data.substr(dataPointer, quantifier);
        dataPointer += quantifier;

        if (quantifier > currentData.length) {
          throw new Error('Warning: unpack(): Type ' + instruction +
              ': not enough input, need ' + quantifier);
        }

        currentResult = '';
        for (i = 0; i < currentData.length; i++) {
          word = currentData.charCodeAt(i).toString(16);
          if (instruction === 'h') {
            word = word[1] + word[0];
          }
          currentResult += word;
        }
        result[label] = currentResult;
        break;

      case 'c': // signed char
      case 'C': // unsigned c
        if (quantifier === '*') {
          quantifier = data.length - dataPointer;
        } else {
          quantifier = parseInt(quantifier, 10);
        }

        currentData = data.substr(dataPointer, quantifier);
        dataPointer += quantifier;

        for (i = 0; i < currentData.length; i++) {
          currentResult = currentData.charCodeAt(i);
          if ((instruction === 'c') && (currentResult >= 128)) {
            currentResult -= 256;
          }
          result[label + (quantifier > 1 ?
              (i + 1) :
              '')] = currentResult;
        }
        break;

      case 'S': // unsigned short (always 16 bit, machine byte order)
      case 's': // signed short (always 16 bit, machine byte order)
      case 'v': // unsigned short (always 16 bit, little endian byte order)
        if (quantifier === '*') {
          quantifier = (data.length - dataPointer) / 2;
        } else {
          quantifier = parseInt(quantifier, 10);
        }

        currentData = data.substr(dataPointer, quantifier * 2);
        dataPointer += quantifier * 2;

        for (i = 0; i < currentData.length; i += 2) {
          // sum per word;
          currentResult = ((currentData.charCodeAt(i + 1) & 0xFF) << 8) +
              (currentData.charCodeAt(i) & 0xFF);
          if ((instruction === 's') && (currentResult >= 32768)) {
            currentResult -= 65536;
          }
          result[label + (quantifier > 1 ?
              ((i / 2) + 1) :
              '')] = currentResult;
        }
        break;

      case 'n': // unsigned short (always 16 bit, big endian byte order)
        if (quantifier === '*') {
          quantifier = (data.length - dataPointer) / 2;
        } else {
          quantifier = parseInt(quantifier, 10);
        }

        currentData = data.substr(dataPointer, quantifier * 2);
        dataPointer += quantifier * 2;

        for (i = 0; i < currentData.length; i += 2) {
          // sum per word;
          currentResult = ((currentData.charCodeAt(i) & 0xFF) << 8) +
              (currentData.charCodeAt(i + 1) & 0xFF);
          result[label + (quantifier > 1 ?
              ((i / 2) + 1) :
              '')] = currentResult;
        }
        break;

      case 'i': // signed integer (machine dependent size and byte order)
      case 'I': // unsigned integer (machine dependent size & byte order)
      case 'l': // signed long (always 32 bit, machine byte order)
      case 'L': // unsigned long (always 32 bit, machine byte order)
      case 'V': // unsigned long (always 32 bit, little endian byte order)
        if (quantifier === '*') {
          quantifier = (data.length - dataPointer) / 4;
        } else {
          quantifier = parseInt(quantifier, 10);
        }

        currentData = data.substr(dataPointer, quantifier * 4);
        dataPointer += quantifier * 4;

        for (i = 0; i < currentData.length; i += 4) {
          currentResult =
              ((currentData.charCodeAt(i + 3) & 0xFF) << 24) +
              ((currentData.charCodeAt(i + 2) & 0xFF) << 16) +
              ((currentData.charCodeAt(i + 1) & 0xFF) << 8) +
              ((currentData.charCodeAt(i) & 0xFF));
          result[label + (quantifier > 1 ?
              ((i / 4) + 1) :
              '')] = currentResult;
        }

        break;

      case 'N': // unsigned long (always 32 bit, little endian byte order)
        if (quantifier === '*') {
          quantifier = (data.length - dataPointer) / 4;
        } else {
          quantifier = parseInt(quantifier, 10);
        }

        currentData = data.substr(dataPointer, quantifier * 4);
        dataPointer += quantifier * 4;

        for (i = 0; i < currentData.length; i += 4) {
          currentResult =
              ((currentData.charCodeAt(i) & 0xFF) << 24) +
              ((currentData.charCodeAt(i + 1) & 0xFF) << 16) +
              ((currentData.charCodeAt(i + 2) & 0xFF) << 8) +
              ((currentData.charCodeAt(i + 3) & 0xFF));
          result[label + (quantifier > 1 ?
              ((i / 4) + 1) :
              '')] = currentResult;
        }

        break;

      case 'f': //float
      case 'd': //double
        ebits = 8;
        fbits = (instruction === 'f') ? 23 : 52;
        dataByteLength = 4;
        if (instruction === 'd') {
          ebits = 11;
          dataByteLength = 8;
        }

        if (quantifier === '*') {
          quantifier = (data.length - dataPointer) / dataByteLength;
        } else {
          quantifier = parseInt(quantifier, 10);
        }

        currentData = data.substr(dataPointer, quantifier * dataByteLength);
        dataPointer += quantifier * dataByteLength;

        for (i = 0; i < currentData.length; i += dataByteLength) {
          data = currentData.substr(i, dataByteLength);

          bytes = [];
          for (j = data.length - 1; j >= 0; --j) {
            bytes.push(data.charCodeAt(j));
          }
          result[label + (quantifier > 1 ?
              ((i / 4) + 1) :
              '')] = fromIEEE754(bytes, ebits, fbits);
        }

        break;

      case 'x': // NUL byte
      case 'X': // Back up one byte
      case '@': // NUL byte
        if (quantifier === '*') {
          quantifier = data.length - dataPointer;
        } else {
          quantifier = parseInt(quantifier, 10);
        }

        if (quantifier > 0) {
          if (instruction === 'X') {
            dataPointer -= quantifier;
          } else {
            if (instruction === 'x') {
              dataPointer += quantifier;
            } else {
              dataPointer = quantifier;
            }
          }
        }
        break;

      default:
        throw new Error('Warning:  unpack() Type ' + instruction +
            ': unknown format code');
    }
  }
  return result;
}

var IDConverter;
IDConverter = (function() {
  function IDConverter() {}
  IDConverter.base32HexAlphabetMap = {
    "0": "00000",
    "1": "00001",
    "2": "00010",
    "3": "00011",
    "4": "00100",
    "5": "00101",
    "6": "00110",
    "7": "00111",
    "8": "01000",
    "9": "01001",
    "A": "01010",
    "B": "01011",
    "C": "01100",
    "D": "01101",
    "E": "01110",
    "F": "01111",
    "G": "10000",
    "H": "10001",
    "I": "10010",
    "J": "10011",
    "K": "10100",
    "L": "10101",
    "M": "10110",
    "N": "10111",
    "O": "11000",
    "P": "11001",
    "Q": "11010",
    "R": "11011",
    "S": "11100",
    "T": "11101",
    "U": "11110",
    "V": "11111"
  };
  IDConverter.alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUV';
  IDConverter.pack = function() {
    var result = '';
    for (var i = 0; i < arguments.length; i++) {
      result += String.fromCharCode(arguments[i] >> 24 & 0xff) +
                String.fromCharCode(arguments[i] >> 16 & 0xff) +
                String.fromCharCode(arguments[i] >> 8 & 0xff) +
                String.fromCharCode(arguments[i] & 0xff);
    }
    return result;
  };



  IDConverter.prototype.decodeBase32Hex = function(input) {
    var paddedInput = IDConverter.padLeft(input, 13, '0');
    console.log(paddedInput);
    var s = IDConverter.base32HexDecode(paddedInput);
    //var paddedString = str_pad(input,13,"0",STR_PAD_LEFT);
    //var s = IDConverter.base32HexDecode(str_pad(input,13,"0",STR_PAD_LEFT));
    return 'decoded';
  };

  IDConverter.prototype.encodeBase32Hex = function(input) {
    var ts;
    ts = input.getTimestamp();
    console.log('<ts>' + ts + '</ts>');
    var shardAndRandom = (input.getShard() << 24) | input.getRandom();
    console.log('<shardAndRandom>' + shardAndRandom + '</shardAndRandom>');
    var binaryData = IDConverter.pack(ts,shardAndRandom);
    console.log('<binaryData>' + binaryData + '</binaryData>');
    var result = IDConverter.base32HexEncode(binaryData);
    console.log(result);
    return result;
  };
  // static method to convert text to binary string, 
  // for example 'Hello' to '0100100001100101011011000110110001101111'
  IDConverter.stringToBinary  = function(value) { 
    var length = value.length;
    var output = []; 
    for (var i = 0;i < length; i++) { 
        var bin = value[i].charCodeAt().toString(2);
        output.push(Array(9-bin.length).join('0') + bin);
    } 
    return output.join(''); 
  }

  // static method to convert text to binary string, 
  // for example '0100100001100101011011000110110001101111' to 'Hello'
  IDConverter.binaryToString = function(value) {
    var result = '';
    if(value.match(/[10]{8}/g)){
        result = value.match(/([10]{8}|\s+)/g).map(function(fromBinary){
            return String.fromCharCode(parseInt(fromBinary, 2) );
        }).join('');
    }
    return result;
  }
  IDConverter.padLeft = function(value, length, character) {
    var leftbuff = new Array(length - value.length + 1).join(character);
    return leftbuff + value;
  }
  IDConverter.padRightOnBoundary = function(value, boundarySize, character) {
    var rightbuff = new Array(Math.ceil(value.length / boundarySize) * boundarySize - value.length + 1).join(character);
    return value + rightbuff;
  }
  IDConverter.splitAtLength = function(value, length) {
    var result = [];
    offset = 0;
    for (var i = 0; i < value.length/length; i++) {
      result.push(value.slice(i*length, (i+1) * length));
    }
    return result;
  }

  IDConverter.base32HexDecode = function(value) {
    console.log('inputString: ' + value);
    var alpha = IDConverter.base32HexAlphabetMap;
    var binaryString = '';
    for (var i = 0; i < value.length; i++) {
        binaryString += IDConverter.base32HexAlphabetMap[value.charAt(i)];
    }
    console.log('binStr: ' + binaryString);
    console.log('binStr length: ' + binaryString.length);
    var endTrimLength = 8 * Math.floor(binaryString.length / 8) - binaryString.length;
    console.log('endTrimLength: ' + endTrimLength);
    var newBinaryString = binaryString.slice(0, endTrimLength);
    console.log('newBinaryString: ' + newBinaryString);
    console.log('newBinaryString length: ' + newBinaryString.length);
    // $alpha = self::$base32HexAlphabet;
    //     $binStr = implode("", array_map(function ($key) use ($alpha) {
    //         return $alpha[$key];
    //     }, str_split($inputString)));

    //     // remove 'stuffed' zero chars ('0') from string end to be divisable by 8
    //     while (strlen($binStr) % 8 != 0) {
    //         $binStr = substr($binStr, 0, -1);
    //     }

    //     return implode('', array_map(function ($str) {
    //         return chr(bindec($str));
    //     }, str_split($binStr, 8)));
  }
  
  // port of Base32Hex.encode from PHP
  IDConverter.base32HexEncode = function(value) {
    var result = '';
    console.log("inputString:" + value);
    var binaryString = IDConverter.stringToBinary(value)
    console.log("binStr:" + binaryString);
    var paddedBinaryString = IDConverter.padRightOnBoundary(binaryString, 5, '0');
    console.log("paddedBinaryString: " + paddedBinaryString);
    var splitBinaryOn = IDConverter.splitAtLength(paddedBinaryString, 5);
    console.log("splitBinaryOn: " + splitBinaryOn);
    for (var i = 0; i < splitBinaryOn.length; i++) {
        result += '' + IDConverter.alphabet.charAt(parseInt(splitBinaryOn[i], 2 ));
    }
    return result;
  }

  // encodeBase32Hex(input)(function() {
  //   return 'encoded';
  // });
  //buffer new Uint8Array(100);

  // function IDConverter(params) {
  //   setTimestamp(timestamp);
  //   setShardID(shardID);
  //   setRandom(randomInt);
  // }

  // IDConverter.prototype.setIDFromShard = function(timestamp, shardID, randomInt) {
  //   this.setBase32ID(base32String)
  // };
  // IDConverter.prototype.setIDFromBase32 = function(base32String) {
  // };
  // IDConverter.prototype.setIDFromBigInteger = function(base32String) {
  // };
  return IDConverter;
  })();

// public class ID  {

//     ByteBuffer buffer = ByteBuffer.allocate(9);

//     @JsonCreator
//     public ID(String base32String){
//         setBase32ID(base32String);
//     }

//     public ID(int timestamp, int shardID, int randomInt){
//         setTimestamp(timestamp);
//         setShardID(shardID);
//         setRandom(randomInt);
//     }

//     public ID(BigInteger id){
//         setDecimalID(id);
//     }

//     public void setBase32ID(String id){
//         buffer.position(0);
//         buffer.put(decode(id));
//     }

//     @JsonValue
//     public String getBase32ID(){
//         return encode(getRawData());
//     }

//     public void setDecimalID(BigInteger id) {
//         buffer.position(0);
//         buffer = buffer.put(id.toByteArray());
//     }

//     public BigInteger getDecimalID(){
//         return new BigInteger(buffer.array());
//     }

//     public void setTimestamp(int timestamp) {
//         buffer.position(0);
//         buffer.putInt(timestamp);
//     }

//     public int getTimestamp() {
//         buffer.position(0);
//         return buffer.getInt(0);
//     }

//     public void setShardID(int shardID) {
//         buffer.position(4);
//         buffer.put(new Integer(shardID & 255).byteValue());
//     }

//     public int getShardID() {
//         buffer.position(4);
//         byte shard[] = new byte[1];
//         buffer.get(shard);
//         return new BigInteger(shard).intValue();
//     }

//     public void setRandom(int random) {
//         buffer.position(5);
//         buffer.putInt(random);
//     }

//     public int getRandom() {
//         buffer.position(5);
//         return buffer.getInt(5);
//     }

//     @Override
//     public boolean equals(Object o) {
//         if (getClass() != o.getClass()) {
//             return false;
//         }

//         ID id = (ID) o;
//         buffer.rewind();
//         id.buffer.rewind();
//         return buffer.equals(id.buffer);
//     }

//     @Override
//     public int hashCode() {
//         buffer.rewind();
//         return buffer != null ? buffer.hashCode() : 0;
//     }

//     @Override
//     public String toString() {
//         return getBase32ID();
//     }

//     private byte[] getRawData() {
//         return buffer.array();
//     }

//     private String encode(byte[] data){
//         return BaseEncoding.base32Hex().encode(data).replace("=", "");
//     }

//     private byte[] decode(String data){
//         return BaseEncoding.base32Hex().decode(data);
//     }
// }