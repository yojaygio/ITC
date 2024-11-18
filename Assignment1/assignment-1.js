document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to the button after DOM is loaded
    const convertButton = document.querySelector("button");
    convertButton.addEventListener("click", convert);

    function convert() {
        const value = parseFloat(document.getElementById('value').value);
        const conversionType = document.getElementById('conversionType').value;
        const resultElement = document.getElementById('result');

        if (isNaN(value)) {
            resultElement.textContent = 'Please enter a valid number!';
            resultElement.style.color = 'red';
            return;
        }

        let result;

        if (conversionType === 'f-to-c') {
            result = ((value - 32) * 5) / 9;
            resultElement.textContent = `${value}°F is equal to ${result.toFixed(2)}°C.`;
        } else if (conversionType === 'c-to-f') {
            result = (value * 9) / 5 + 32;
            resultElement.textContent = `${value}°C is equal to ${result.toFixed(2)}°F.`;
        } else if (conversionType === 'm-to-ft') {
            result = value * 3.28084;
            resultElement.textContent = `${value} meters is equal to ${result.toFixed(2)} feet.`;
        } else if (conversionType === 'ft-to-m') {
            result = value / 3.28084;
            resultElement.textContent = `${value} feet is equal to ${result.toFixed(2)} meters.`;
        } else {
            resultElement.textContent = 'Invalid conversion type!';
        }

        resultElement.style.color = 'green';
    }
});
