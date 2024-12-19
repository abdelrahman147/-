document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const func = document.getElementById('functionSelect').value;
    const xVal = parseFloat(document.getElementById('xInput').value);

    const derivativeValue = calculateDerivative(func, xVal);
    const resultDiv = document.getElementById('result');

    if (isNaN(derivativeValue)) {
        resultDiv.textContent = "Invalid input or unknown function.";
    } else {
        resultDiv.textContent = `Derivative of ${func} at x = ${xVal}: ${derivativeValue}`;
    }
});

function calculateDerivative(func, x) {
    switch (func) {
        case "x^2":
            return 2 * x;
        case "x^3":
            return 3 * x * x;
        case "sin(x)":
            return Math.cos(x);
        case "cos(x)":
            return -Math.sin(x);
        case "e^x":
            return Math.exp(x);
        case "ln(x)":
            if (x === 0) return NaN; // ln(x) derivative is 1/x; not defined at x=0
            return 1 / x;
        case "tan(x)":
            return 1 / (Math.cos(x) * Math.cos(x));
        case "sec(x)":
            return (Math.sec ? Math.sec(x)*Math.tan(x) : (1/Math.cos(x))*Math.tan(x));
        default:
            return NaN;
    }
}

// Polyfill for Math.sec if needed (older browsers may not have sec directly)
if (typeof Math.sec !== 'function') {
    Math.sec = function(x) {
        return 1/Math.cos(x);
    }
}
