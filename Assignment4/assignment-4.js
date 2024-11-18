document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("add-btn");
    const deleteBtn = document.getElementById("delete-btn");
    const employeeNameInput = document.getElementById("employee-name");
    const daysWorkedInput = document.getElementById("days-worked");
    const dailyRateInput = document.getElementById("daily-rate");
    const deductionAmountInput = document.getElementById("deduction-amount");
    const deleteLineNumberInput = document.getElementById("delete-line-number");
    const payrollTableBody = document.querySelector("#payroll-table tbody");

    // Payroll list to store employee details
    let payrollList = [];

    // Function to calculate Gross Pay
    function calculateGrossPay(daysWorked, dailyRate) {
        return daysWorked * dailyRate;
    }

    // Function to calculate Net Pay
    function calculateNetPay(grossPay, deductionAmount) {
        return grossPay - deductionAmount;
    }

    // Function to render the payroll table
    function renderPayrollTable() {
        payrollTableBody.innerHTML = ""; // Clear existing rows
        payrollList.forEach((employee, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${employee.name}</td>
                <td>${employee.daysWorked}</td>
                <td>${employee.dailyRate.toFixed(2)}</td>
                <td>${employee.grossPay.toFixed(2)}</td>
                <td>${employee.deductionAmount.toFixed(2)}</td>
                <td>${employee.netPay.toFixed(2)}</td>
            `;
            payrollTableBody.appendChild(row);
        });
    }

    // Function to add a new employee
    function addEmployee() {
        const name = employeeNameInput.value.trim();
        const daysWorked = parseInt(daysWorkedInput.value, 10);
        const dailyRate = parseFloat(dailyRateInput.value);
        const deductionAmount = parseFloat(deductionAmountInput.value);

        if (name && !isNaN(daysWorked) && !isNaN(dailyRate) && !isNaN(deductionAmount)) {
            const grossPay = calculateGrossPay(daysWorked, dailyRate);
            const netPay = calculateNetPay(grossPay, deductionAmount);

            // Add employee details to the payroll list
            const newEmployee = {
                name,
                daysWorked,
                dailyRate,
                grossPay,
                deductionAmount,
                netPay
            };
            payrollList.push(newEmployee);
            renderPayrollTable(); // Update the table
        } else {
            alert("Please fill in all fields with valid values.");
        }

        // Clear input fields
        employeeNameInput.value = "";
        daysWorkedInput.value = "";
        dailyRateInput.value = "";
        deductionAmountInput.value = "";
    }

    // Function to delete an employee by line number
    function deleteEmployee() {
        const lineNumber = parseInt(deleteLineNumberInput.value, 10);

        if (!isNaN(lineNumber) && lineNumber > 0 && lineNumber <= payrollList.length) {
            payrollList.splice(lineNumber - 1, 1); // Remove the selected employee
            renderPayrollTable(); // Update the table
        } else {
            alert("Invalid line number. Please enter a valid number.");
        }

        deleteLineNumberInput.value = ""; // Clear input field
    }

    // Event listeners for buttons
    addBtn.addEventListener("click", addEmployee);
    deleteBtn.addEventListener("click", deleteEmployee);
});
