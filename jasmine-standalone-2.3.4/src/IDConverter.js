
function pack(format) {
  //  discuss at: http://phpjs.org/functions/pack/
  // original by: Tim de Koning (http://www.kingsquare.nl)
  //    parts by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // bugfixed by: Tim de Koning (http://www.kingsquare.nl)
  //        note: Float encoding by: Jonas Raoni Soares Silva
  //        note: Home: http://www.kingsquare.nl/blog/12-12-2009/13507444
  //        note: Feedback: phpjs-pack@kingsquare.nl
  //        note: 'machine dependent byte order and size' aren't
  //        note: applicable for JavaScript; pack works as on a 32bit,
  //        note: little endian machine
  //   example 1: pack('nvc*', 0x1234, 0x5678, 65, 66);
  //   returns 1: '4xVAB'
  //   example 2: pack('H4', '2345')
  //   returns 2: '#E'
  //   example 3: pack('H*', 'D5')
  //   returns 3: 'Õ'
  //   example 4: pack('d', -100.876)
  //   returns 4: "\u0000\u0000\u0000\u0000\u00008YÀ"

  var formatPointer = 0,
    argumentPointer = 1,
    result = '',
    argument = '',
    i = 0,
    r = [],
    instruction, quantifier, word, precisionBits, exponentBits, extraNullCount;

  // vars used by float encoding
  var bias, minExp, maxExp, minUnnormExp, status, exp, len, bin, signal, n, intPart, floatPart, lastBit, rounded, j,
    k, tmpResult;

  while (formatPointer < format.length) {
    instruction = format.charAt(formatPointer);
    quantifier = '';
    formatPointer++;
    while ((formatPointer < format.length) && (format.charAt(formatPointer)
      .match(/[\d\*]/) !== null)) {
      quantifier += format.charAt(formatPointer);
      formatPointer++;
    }
    if (quantifier === '') {
      quantifier = '1';
    }

    // Now pack variables: 'quantifier' times 'instruction'
    switch (instruction) {
    case 'N':
      // unsigned long (always 32 bit, big endian byte order)
      if (quantifier === '*') {
        quantifier = arguments.length - argumentPointer;
      }
      if (quantifier > (arguments.length - argumentPointer)) {
        throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
      }

      for (i = 0; i < quantifier; i++) {
        result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
        result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
        result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
        result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
        argumentPointer++;
      }
      break;

    default:
      throw new Error('Warning:  pack() Type ' + instruction + ': unknown format code');
    }
  }
  if (argumentPointer < arguments.length) {
    throw new Error('Warning: pack(): ' + (arguments.length - argumentPointer) + ' arguments unused');
  }

  return result;
}
var IDConverter;
IDConverter = (function() {
  function IDConverter() {}
  IDConverter.alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUV';
  IDConverter.prototype.decodeBase32Hex = function(input) {
    return 'decoded';
  };
  IDConverter.prototype.encodeBase32Hex = function(input) {
    var ts;
    ts = input.getTimestamp();
    console.log('<ts>' + ts + '</ts>');
    var shardAndRandom = (input.getShard() << 24) | input.getRandom();
    console.log('<shardAndRandom>' + shardAndRandom + '</shardAndRandom>');
    var binaryData = pack('NN',ts,shardAndRandom);
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