function calculate() {
    let currentDividend = parseInt(document.getElementById("currentDividend").value);
    let growthRate = parseInt(document.getElementById("growthRate").value) / 100;
    let requiredReturn = parseInt(document.getElementById("requiredReturn").value) / 100;

    let nextDividend = currentDividend * (1 + growthRate);
    let stockPrice = nextDividend / (requiredReturn - growthRate);
    let result=document.getElementById("result");
    result.innerHTML= "Stock Price: " + stockPrice.toFixed(2);
}