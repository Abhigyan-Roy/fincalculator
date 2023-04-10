function calculate() {
    // Get the inputs
    let low = parseFloat(document.getElementById("low").value);
    let high = parseFloat(document.getElementById("high").value);
    let prev_close = parseFloat(document.getElementById("prev_close").value);

    // Calculate the pivot point and support and resistance levels
    let pp = (high + low + prev_close) / 3;
    let r1 = (2 * pp) - low;
    let r2 = pp + (high - low);
    let r3 = high + 2 * (pp - low);
    let s1 = (2 * pp) - high;
    let s2 = pp - (high - low);
    let s3 = low - 2 * (high - pp);

    // Display the results
    let result = document.getElementById("result");
    result.innerHTML = "<h2>Results</h2>" +
                       "<p>Pivot Point: " + pp.toFixed(2) + "</p>" +
                       "<p>Resistance 1: " + r1.toFixed(2) + "</p>" +
                       "<p>Resistance 2: " + r2.toFixed(2) + "</p>" +
                       "<p>Resistance 3: " + r3.toFixed(2) + "</p>" +
                       "<p>Support 1: " + s1.toFixed(2) + "</p>" +
                       "<p>Support 2: " + s2.toFixed(2) + "</p>" +
                       "<p>Support 3: " + s3.toFixed(2) + "</p>";
}