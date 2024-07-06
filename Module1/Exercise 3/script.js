function changeHeading1() {
  const newHeading1 = document.getElementById("input1").value;
  if (newHeading1) {
    document.getElementById("heading1").innerText = newHeading1;
  } else {
    document.getElementById("heading1").innerText = "New Heading 1";
  }
  document.getElementById("column1").style.backgroundColor = "lightgreen";
}

function changeHeading2() {
  const newHeading2 = document.getElementById("input2").value;
  if (newHeading2) {
    document.getElementById("heading2").innerText = newHeading2;
  } else {
    document.getElementById("heading2").innerText = "New Heading 2";
  }
  document.getElementById("column2").style.backgroundColor = "lightcoral";
}
