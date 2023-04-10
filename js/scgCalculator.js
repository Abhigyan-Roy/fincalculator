function calculate() {
    var currentDividend = document.getElementById("currentDividend").value;
    var growthRate = document.getElementById("growthRate").value / 100;
    var requiredReturn = document.getElementById("requiredReturn").value / 100;

    var nextDividend = currentDividend * (1 + growthRate);
    var stockPrice = nextDividend / (requiredReturn - growthRate);

    document.getElementById("result").innerHTML = "Stock Price: " + stockPrice.toFixed(2);
}