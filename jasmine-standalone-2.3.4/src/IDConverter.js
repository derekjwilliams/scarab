IDConverter = (function() {
  buffer new Uint8Array(100);

  function IDConverter(params) {
    setTimestamp(timestamp);
    setShardID(shardID);
    setRandom(randomInt);
  }

  IDConverter.prototype.setIDFromShard = function(timestamp, shardID, randomInt) {
    this.setBase32ID(base32String)
  };
  IDConverter.prototype.setIDFromBase32 = function(base32String) {
  };
  IDConverter.prototype.setIDFromBigInteger = function(base32String) {
  };

})();

public class ID  {

    ByteBuffer buffer = ByteBuffer.allocate(9);

    @JsonCreator
    public ID(String base32String){
        setBase32ID(base32String);
    }

    public ID(int timestamp, int shardID, int randomInt){
        setTimestamp(timestamp);
        setShardID(shardID);
        setRandom(randomInt);
    }

    public ID(BigInteger id){
        setDecimalID(id);
    }

    public void setBase32ID(String id){
        buffer.position(0);
        buffer.put(decode(id));
    }

    @JsonValue
    public String getBase32ID(){
        return encode(getRawData());
    }

    public void setDecimalID(BigInteger id) {
        buffer.position(0);
        buffer = buffer.put(id.toByteArray());
    }

    public BigInteger getDecimalID(){
        return new BigInteger(buffer.array());
    }

    public void setTimestamp(int timestamp) {
        buffer.position(0);
        buffer.putInt(timestamp);
    }

    public int getTimestamp() {
        buffer.position(0);
        return buffer.getInt(0);
    }

    public void setShardID(int shardID) {
        buffer.position(4);
        buffer.put(new Integer(shardID & 255).byteValue());
    }

    public int getShardID() {
        buffer.position(4);
        byte shard[] = new byte[1];
        buffer.get(shard);
        return new BigInteger(shard).intValue();
    }

    public void setRandom(int random) {
        buffer.position(5);
        buffer.putInt(random);
    }

    public int getRandom() {
        buffer.position(5);
        return buffer.getInt(5);
    }

    @Override
    public boolean equals(Object o) {
        if (getClass() != o.getClass()) {
            return false;
        }

        ID id = (ID) o;
        buffer.rewind();
        id.buffer.rewind();
        return buffer.equals(id.buffer);
    }

    @Override
    public int hashCode() {
        buffer.rewind();
        return buffer != null ? buffer.hashCode() : 0;
    }

    @Override
    public String toString() {
        return getBase32ID();
    }

    private byte[] getRawData() {
        return buffer.array();
    }

    private String encode(byte[] data){
        return BaseEncoding.base32Hex().encode(data).replace("=", "");
    }

    private byte[] decode(String data){
        return BaseEncoding.base32Hex().decode(data);
    }
}