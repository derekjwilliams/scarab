var IDConverter;
IDConverter = (function() {
  function IDConverter() {}
  IDConverter.base32HexAlphabetMap = {
    "0": "00000", "1": "00001", "2": "00010", "3": "00011", "4": "00100", "5": "00101", "6": "00110", "7": "00111",
    "8": "01000", "9": "01001", "A": "01010", "B": "01011", "C": "01100", "D": "01101", "E": "01110", "F": "01111",
    "G": "10000", "H": "10001", "I": "10010", "J": "10011", "K": "10100", "L": "10101", "M": "10110", "N": "10111",
    "O": "11000", "P": "11001", "Q": "11010", "R": "11011", "S": "11100", "T": "11101", "U": "11110", "V": "11111"
  };
  IDConverter.alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUV';

  // subset of unpack for the case of format 'N*'
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

  // subset of pack for the case of format 'NN'
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

  // Convert text to binary string, 
  // for example 'Hello' to '0100100001100101011011000110110001101111'
  IDConverter.stringToBinary = function(value) {
    var output = [];
    for (var i = 0; i < value.length; i++) {
      var binaryPart = value[i].charCodeAt().toString(2);
      output.push(Array(9 - binaryPart.length).join('0') + binaryPart);
    }
    return output.join('');
  }

  // Convert text to binary string, 
  // for example '0100100001100101011011000110110001101111' to 'Hello'
  IDConverter.binaryToString = function(value) {
    var result = '';
    if (value.match(/[10]{8}/g)) {
      result = value.match(/([10]{8}|\s+)/g).map(function(binaryPart) {
        return String.fromCharCode(parseInt(binaryPart, 2));
      }).join('');
    }
    return result;
  }

  // Pad string with characters to a given length
  IDConverter.padLeft = function(value, length, character) {
    var leftbuff = new Array(length - value.length + 1).join(character);
    return leftbuff + value;
  }

  // Pad string on the right to a given length
  IDConverter.padRightOnBoundary = function(value, length, character) {
    var rightbuff = new Array(Math.ceil(value.length / length) * length - value.length + 1).join(character);
    return value + rightbuff;
  }

  // Split a string into parts of given length
  IDConverter.splitAtLength = function(value, length) {
    var result = [];
    offset = 0;
    for (var i = 0; i < value.length / length; i++) {
      result.push(value.slice(i * length, (i + 1) * length));
    }
    return result;
  }

  // Port of Base32Hex.decode from PHP
  IDConverter.base32HexDecode = function(value) {
    var result = '';
    var alpha = IDConverter.base32HexAlphabetMap;
    var binaryString = '';
    for (var i = 0; i < value.length; i++) {
      binaryString += IDConverter.base32HexAlphabetMap[value.charAt(i)];
    }
    var endTrimLength = 8 * Math.floor(binaryString.length / 8) - binaryString.length;
    var newBinaryString = binaryString.slice(0, endTrimLength);
    var splitBinary = IDConverter.splitAtLength(newBinaryString, 8);
    for (var i = 0; i < splitBinary.length; i++) {
      result += IDConverter.binaryToString(splitBinary[i]);
    }
    return result;
  }

  // port of Base32Hex.encode from PHP
  IDConverter.base32HexEncode = function(value) {
    var result = '';
    var binaryString = IDConverter.stringToBinary(value)
    var paddedBinaryString = IDConverter.padRightOnBoundary(binaryString, 5, '0');
    var splitBinaryOn = IDConverter.splitAtLength(paddedBinaryString, 5);
    for (var i = 0; i < splitBinaryOn.length; i++) {
      result += IDConverter.alphabet.charAt(parseInt(splitBinaryOn[i], 2));
    }
    return result;
  }

  IDConverter.prototype.decodeBase32Hex = function(input) {
    result = new ID();
    var paddedInput = IDConverter.padLeft(input, 13, '0');
    var data = IDConverter.unpack(IDConverter.base32HexDecode(paddedInput));
    var dataString = data.join('');
    var shard = data[1] >> 24;
    var random = data[1] & 0xffffff;
    result.setTimestamp(data[0]);
    result.setShard(shard);
    result.setRandom(random);
    return result;
  };

  IDConverter.prototype.encodeBase32Hex = function(input) {
    var shardAndRandom = (input.getShard() << 24) | input.getRandom();
    var binaryData = IDConverter.pack(input.getTimestamp(), shardAndRandom);
    return IDConverter.base32HexEncode(binaryData);
  };

  return IDConverter;
})();
