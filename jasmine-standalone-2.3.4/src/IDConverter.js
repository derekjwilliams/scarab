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
  IDConverter.unpack = function(data) {
    var result = [];
    var dataString = data.substr(0, data.length * 4);
    for (i = 0; i < dataString.length; i += 4) {
      result.push(((dataString.charCodeAt(i) & 0xff) << 24) +
        ((dataString.charCodeAt(i + 1) & 0xff) << 16) +
        ((dataString.charCodeAt(i + 2) & 0xff) << 8) +
        ((dataString.charCodeAt(i + 3) & 0xff)));
    }
    return result;
  }
  
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
    result = new ID();
    var paddedInput = IDConverter.padLeft(input, 13, '0');
    console.log(paddedInput);
    var s = IDConverter.base32HexDecode(paddedInput);
    var data = IDConverter.unpack(s);
    // since old IE does not support Object.keys and we want to be independent of any libaries like jquery
    var dataString = data.join('');
    console.log('keys length: ' + dataString.length);
    console.log('dataString: ' + JSON.stringify(dataString));
    var timestamp = data[0];
    var shardAndRandom = data[1]
    console.log('timestamp: ' + timestamp);
    console.log('shardAndRandom: ' + shardAndRandom);
    var shard = shardAndRandom >> 24;
    var random = shardAndRandom & 0xffffff;
    console.log('shard: ' + shard);
    console.log('random: ' + random);
    result.setTimestamp(timestamp);
    result.setShard(shard);
    result.setRandom(random);
    return result;
  };

  IDConverter.prototype.encodeBase32Hex = function(input) {
    var ts;
    ts = input.getTimestamp();
    console.log('<ts>' + ts + '</ts>');
    var shardAndRandom = (input.getShard() << 24) | input.getRandom();
    console.log('<shardAndRandom>' + shardAndRandom + '</shardAndRandom>');
    var binaryData = IDConverter.pack(ts, shardAndRandom);
    console.log('<binaryData>' + binaryData + '</binaryData>');
    var result = IDConverter.base32HexEncode(binaryData);
    console.log(result);
    return result;
  };
  // static method to convert text to binary string, 
  // for example 'Hello' to '0100100001100101011011000110110001101111'
  IDConverter.stringToBinary = function(value) {
    var length = value.length;
    var output = [];
    for (var i = 0; i < length; i++) {
      var bin = value[i].charCodeAt().toString(2);
      output.push(Array(9 - bin.length).join('0') + bin);
    }
    return output.join('');
  }

  // static method to convert text to binary string, 
  // for example '0100100001100101011011000110110001101111' to 'Hello'
  IDConverter.binaryToString = function(value) {
    var result = '';
    if (value.match(/[10]{8}/g)) {
      result = value.match(/([10]{8}|\s+)/g).map(function(fromBinary) {
        return String.fromCharCode(parseInt(fromBinary, 2));
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
      for (var i = 0; i < value.length / length; i++) {
        result.push(value.slice(i * length, (i + 1) * length));
      }
      return result;
    }
    // port of Base32Hex.decode from PHP
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
    var result = '';
    var splitBinary = IDConverter.splitAtLength(newBinaryString, 8);
    console.log(JSON.stringify(splitBinary));
    for (var i = 0; i < splitBinary.length; i++) {
      result += '' + IDConverter.binaryToString(splitBinary[i]);
    }
    console.log('result: ' + result);
    return result;
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
      result += '' + IDConverter.alphabet.charAt(parseInt(splitBinaryOn[i], 2));
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
