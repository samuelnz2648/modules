const Calculator = require("../models/calculatorModel");

exports.add = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = Calculator.add(num1, num2);
  res.json({ result });
};

exports.subtract = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = Calculator.subtract(num1, num2);
  res.json({ result });
};

exports.multiply = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const result = Calculator.multiply(num1, num2);
  res.json({ result });
};

exports.divide = (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  if (num2 === 0) {
    res.status(400).json({ error: "Division by zero is not allowed" });
  } else {
    const result = Calculator.divide(num1, num2);
    res.json({ result });
  }
};
