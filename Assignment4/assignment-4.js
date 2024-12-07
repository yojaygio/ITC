let employeeList = [];

function addEmployee() {
    const name = document.getElementById("name").value;
    const daysWorked = parseInt(document.getElementById("daysWorked").value, 10);
    const dailyRate = parseFloat(document.getElementById("dailyRate").value);
    const deduction = parseFloat(document.getElementById("deduction").value);

    if (name && daysWorked >= 0 && dailyRate >= 0 && deduction >= 0) {
        const grossPay = daysWorked * dailyRate;
        const netPay = grossPay - deduction;

        employeeList.push({
            name,
            daysWorked,
            dailyRate,
            grossPay,
            deduction,
            netPay,
        });

        document.getElementById("payroll-form").reset();
        updateTable();
    } else {
        alert("Please fill all fields correctly!");
    }
}

function deleteEmployee(index) {
    employeeList.splice(index, 1);
    updateTable();
}

function updateTable() {
    const tableBody = document.querySelector("#payroll-table tbody");
    tableBody.innerHTML = "";

    employeeList.forEach((employee, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate.toFixed(2)}</td>
            <td>${employee.grossPay.toFixed(2)}</td>
            <td>${employee.deduction.toFixed(2)}</td>
            <td>${employee.netPay.toFixed(2)}</td>
            <td><button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button></td>
        `;

        tableBody.appendChild(row);
    });
}



