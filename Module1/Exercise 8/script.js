function rollDice() {
  const sides = parseInt(document.getElementById("diceSides").value);
  const result = Math.floor(Math.random() * sides) + 1;
  document.getElementById("result").innerText = `You rolled a ${result}`;
}

// Unit tests
function testRollDice() {
  const testSides = [6, 10, 20];
  testSides.forEach((sides) => {
    for (let i = 0; i < 100; i++) {
      const result = rollDiceTest(sides);
      console.assert(
        result >= 1 && result <= sides,
        `Test failed for ${sides}-sided dice with result ${result}`
      );
    }
  });
  console.log("All tests passed.");
}

function rollDiceTest(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

testRollDice();
