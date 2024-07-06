// controllers/friendController.js

const friends = require("../models/friends");
const Calculator = require("../libraries/calculator");
const RandomId = require("../libraries/randomId");
const Logger = require("../libraries/logger");

const calculator = new Calculator();
const randomId = new RandomId();
const logger = new Logger();

const getAllFriends = (req, res) => {
  res.json(friends);
};

const filterFriends = (req, res) => {
  console.log(req.query);
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender == filterGender
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.startsWith(filterLetter)
    );
  }

  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({ error: `No friends matching criteria` });
  }
};

const getInfo = (req, res) => {
  console.log(req.headers);
  const {
    "user-agent": userAgent,
    "content-type": contentType,
    accept,
  } = req.headers;
  res.json({ "user-agent": userAgent, "content-type": contentType, accept });
};

const getFriendById = (req, res) => {
  console.log(req.params);
  let friendId = parseInt(req.params.id);
  let friend = friends.find((friend) => friend.id === friendId);
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
};

const addFriend = (req, res) => {
  let newFriend = req.body;
  console.log(newFriend);

  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = randomId.generate();
  }

  friends.push(newFriend);
  logger.log(`Added friend with ID: ${newFriend.id}`);
  res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
  let friendId = parseInt(req.params.id);
  let updatedFriend = req.body;

  let friendIndex = friends.findIndex((friend) => friend.id === friendId);
  if (friendIndex !== -1) {
    friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };
    logger.log(`Updated friend with ID: ${friendId}`);
    res.status(200).json(friends[friendIndex]);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
};

const calculate = (req, res) => {
  const { operation, num1, num2 } = req.query;
  let result;

  try {
    switch (operation) {
      case "add":
        result = calculator.add(parseFloat(num1), parseFloat(num2));
        break;
      case "subtract":
        result = calculator.subtract(parseFloat(num1), parseFloat(num2));
        break;
      case "multiply":
        result = calculator.multiply(parseFloat(num1), parseFloat(num2));
        break;
      case "divide":
        result = calculator.divide(parseFloat(num1), parseFloat(num2));
        break;
      default:
        throw new Error("Invalid operation");
    }
    logger.log(`Performed ${operation} operation with result: ${result}`);
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllFriends,
  filterFriends,
  getInfo,
  getFriendById,
  addFriend,
  updateFriend,
  calculate,
};
