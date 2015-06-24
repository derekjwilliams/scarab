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
  it('decode 88T3AM0815ONI with typical values', function() {
    var id = converter.decodeBase32Hex('88T3AM0815ONI');
    expect(id.getTimestamp()).toBe(1111111000);
    expect(id.getShard()).toBe(8);
    expect(id.getRandom()).toBe(618873);
  });
  it('simple decode 88T3AM0815ONI with typical values simple', function() {
    var legacyID = converter.toLegacyID('88T3AM0815ONI');
    expect(legacyID).toBe(618873);
  });

  it('encode 88T3AM0815ONI with typical values', function() {
    var id = new ID();
    id.setTimestamp(1111111000);
    id.setShard(8);
    id.setRandom(618873);
    var encID = converter.encodeBase32Hex(id);
    expect(encID).toBe('88T3AM0815ONI');
  });
  it('simple encode 618873 with typical values simple', function() {
    var arsenalID = converter.toArsenalID(618873);
    expect(arsenalID).toBe('88T3AM0815ONI');
  });

  it('decode with smaller values to test padding', function() {
    var id = converter.decodeBase32Hex('8100002');
    expect(id.getTimestamp()).toBe(1);
    expect(id.getShard()).toBe(1);
    expect(id.getRandom()).toBe(1);
  });
});
