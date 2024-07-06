// libraries/randomId.js

class RandomId {
  generate() {
    return Math.floor(Math.random() * 1000000);
  }
}

module.exports = RandomId;
