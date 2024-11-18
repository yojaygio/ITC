document.addEventListener("DOMContentLoaded", function () {

    const calculateBtn = document.getElementById("calculate-btn");
    const nInput = document.getElementById("n-value");

   
    function calculateFactorial(n) {
        let factorial = 1;
        let i = 1;
        while (i <= n) {
            factorial *= i;
            i++;
        }
        return factorial;
    }

    
    function calculateSum(n) {
        let sum = 0;
        let i = 1;
        do {
            sum += i;
            i++;
        } while (i <= n);
        return sum;
    }

    function calculateAverage(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum / n;
    }
    function displayResults(n) {
        const factorialResult = calculateFactorial(n);
        const sumResult = calculateSum(n);
        const averageResult = calculateAverage(n);

        document.getElementById("factorial-result").textContent = `Factorial of ${n}: ${factorialResult}`;
        document.getElementById("sum-result").textContent = `Sum of first ${n} numbers: ${sumResult}`;
        document.getElementById("average-result").textContent = `Average of first ${n} numbers: ${averageResult.toFixed(2)}`;
    }

    calculateBtn.addEventListener("click", function () {
        const n = parseInt(nInput.value);

        if (isNaN(n) || n <= 0) {
            alert("Please enter a valid integer greater than 0.");
        } else {
            displayResults(n);
        }
    });
});
