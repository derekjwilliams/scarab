var ID;

ID = (function() {
  ID.prototype.timestamp = null;
  ID.prototype.shard = null;
  ID.prototype.random = null;
  
  ID.prototype.getTimeStamp = function() {
    return this.timestamp;
  };

  ID.prototype.getShard = function() {
    return this.shard;
  };

  ID.prototype.getRandom = function() {
    return this.random;
  };

  ID.prototype.getTimestamp = function() {
    return this.timestamp;
  };

  ID.prototype.setTimestamp = function(timestamp) {
    return this.timestamp = timestamp;
  };

  ID.prototype.setShard = function(shard) {
    return this.shard = shard;
  };

  ID.prototype.setRandom = function(random) {
    return this.random = random;
  };

  function ID(timestamp1, shard1, random1) {
    this.timestamp = timestamp1;
    this.shard = shard1;
    this.random = random1;
  }

  return ID;

})();