describe('Suite to test ID Encoding and Decoding', function() {
  var converter;
  beforeEach(function() {
    converter = new IDConverter();
  });
  it('encode with typical values', function() {
    var id = new ID();
    id.setTimestamp(1111111111);
    id.setShard(8);
    id.setRandom(39226);
    var encID = converter.encodeBase32Hex(id);
    expect(encID).toBe('88T3BHO802CJK');
  });
  it('encode using smaller numbers to test padding', function() {
    var id = new ID();
    id.setTimestamp(1);
    id.setShard(1);
    id.setRandom(1);
    var encID = converter.encodeBase32Hex(id);
    expect(encID).toBe('0000008100002');
  });
  it('decode with typical values', function() {
    var id = converter.decodeBase32Hex('88T3BHO802CJK');
    expect(id.getTimestamp()).toBe(1111111111);
    expect(id.getShard()).toBe(8);
    expect(id.getRandom()).toBe(39226);
  });

  it('decode with smaller values to test padding', function() {
    var id = converter.decodeBase32Hex('8100002');
    expect(id.getTimestamp()).toBe(1);
    expect(id.getShard()).toBe(1);
    expect(id.getRandom()).toBe(1);
  });
});
