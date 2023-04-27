function calculate() {
  // Get inputs
  const requiredReturn = document.getElementById("requiredReturn").value / 100;
  const dividend = document.getElementById("dividend").value;
  const growthRates = [
    document.getElementById("growthRate1").value / 100,
    document.getElementById("growthRate2").value / 100,
    document.getElementById("growthRate3").value / 100,
    document.getElementById("growthRate4").value / 100,
    document.getElementById("growthRate5").value / 100,
    document.getElementById("growthRate6").value / 100,
    document.getElementById("growthRate7").value / 100,
    document.getElementById("growthRate8").value / 100,
    document.getElementById("growthRate9").value / 100,
    document.getElementById("growthRate10").value / 100
  ];

  // Calculate present value of dividend
  let presentValue = 0;
  for (let i = 1; i <= 10; i++) {
    presentValue += dividend / Math.pow(1 + requiredReturn, i);
  }

  // Calculate future value of stock
  let futureValue = presentValue;
  for (let i = 0; i < growthRates.length; i++) {
    futureValue = futureValue * (1 + growthRates[i]);
  }

  // Display the results
  const resultElem = document.getElementById("result");
  resultElem.innerHTML = "The future value of the stock is: " + futureValue.toFixed(2);
}
