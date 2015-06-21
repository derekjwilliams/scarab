describe('A suite', function() {
  var converter;

  beforeEach(function() {
    converter = new IDConverter();
  });
  it('encode with typical values', function() {
    var id = new ID();

    id.setTimestamp(1111111111);
    id.setShard(8);
    id.setRandom(39226);

    encID = converter.encodeBase32Hex(id);
    console.log(encID);
    expect(encID).toBe('88T3BHO802CJK');
  });
  it('encode using smaller numbers to test padding', function() {
    var id = new ID();

    id.setTimestamp(1);
    id.setShard(1);
    id.setRandom(1);

    encID = converter.encodeBase32Hex(id);
    console.log(encID);
    expect(encID).toBe('0000008100002');
  });
  it('decode with typical values', function() {
    converter.decodeBase32Hex('88T3BHO802CJK');
    // var encoded = base32.encode('somethingtoencode');
    // var id = new ID();

    // id.setTimestamp(1);
    // id.setShard(1);
    // id.setRandom(1);

    // encID = converter.encodeBase32Hex(id);
    // console.log(encID);
    // expect(encID).toBe('0000008100002');
  });

  it('decode with typical values', function() {
    converter.decodeBase32Hex('8100002');
  });
});
