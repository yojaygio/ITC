document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", calculateTax);

    function calculateTax() {
        const taxableIncome = parseFloat(document.getElementById('taxableIncome').value);
        const resultElement = document.getElementById('result');

        if (isNaN(taxableIncome) || taxableIncome < 0) {
            resultElement.textContent = 'Please enter a valid positive number!';
            resultElement.style.color = 'red';
            return;
        }

        let basicTax = 0;
        let rateTax = 0;

        if (taxableIncome <= 250000) {
            basicTax = 0;
            rateTax = 0;
        } else if (taxableIncome <= 400000) {
            basicTax = 0;
            rateTax = (taxableIncome - 250000) * 0.20;
        } else if (taxableIncome <= 800000) {
            basicTax = 30000;
            rateTax = (taxableIncome - 400000) * 0.25;
        } else if (taxableIncome <= 2000000) {
            basicTax = 130000;
            rateTax = (taxableIncome - 800000) * 0.30;
        } else if (taxableIncome <= 8000000) {
            basicTax = 490000;
            rateTax = (taxableIncome - 2000000) * 0.32;
        } else {
            basicTax = 2410000;
            rateTax = (taxableIncome - 8000000) * 0.35;
        }

        const totalTax = basicTax + rateTax;
        resultElement.textContent = `Income Tax: PHP ${totalTax.toFixed(2)}`;
        resultElement.style.color = 'green';
    }
});
