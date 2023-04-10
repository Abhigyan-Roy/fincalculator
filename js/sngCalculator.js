function calculate() {
    // Get inputs
    const requiredReturn = document.getElementById("requiredReturn").value / 100;
    const dividend = document.getElementById("dividend").value;
    const growthRate1 = document.getElementById("growthRate1").value / 100;
    const growthRate2 = document.getElementById("growthRate2").value / 100;
    const growthRate3 = document.getElementById("growthRate3").value / 100;
    const growthRate4 = document.getElementById("growthRate4").value / 100;
    const growthRate5 = document.getElementById("growthRate5").value / 100;
    const growthRate6 = document.getElementById("growthRate6").value / 100;
    const growthRate7 = document.getElementById("growthRate7").value / 100;
    const growthRate8 = document.getElementById("growthRate8").value / 100;
    const growthRate9 = document.getElementById("growthRate9").value / 100;
    const growthRate10 = document.getElementById("growthRate10").value / 100;
  
    // Calculate present value of dividend
    let presentValue = 0;
    for (let i = 1; i <= 10; i++) {
      presentValue += dividend / Math.pow(1 + requiredReturn, i);
    }
  
    // Calculate future value of stock
    let futureValue = presentValue * Math.pow(1 + growthRate1, 1);
    futureValue = futureValue * Math.pow(1 + growthRate2, 1);
    futureValue = futureValue * Math.pow(1 + growthRate3, 1);
    futureValue = futureValue * Math.pow(1 + growthRate4, 1);
    futureValue = futureValue * Math.pow(1 + growthRate5, 1);
    futureValue = futureValue * Math.pow(1 + growthRate6, 1);
    futureValue = futureValue * Math.pow(1 + growthRate7, 1);
    futureValue = futureValue * Math.pow(1 + growthRate8, 1);
    futureValue = futureValue * Math.pow(1 + growthRate9, 1);
    futureValue = futureValue * Math.pow(1 + growthRate10, 1);
  
    // Display the results
    const resultElem = document.getElementById("result");
    resultElem.innerHTML = "The future value of the stock is: " + futureValue.toFixed(2);
  }