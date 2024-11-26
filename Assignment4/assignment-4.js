document.addEventListener("DOMContentLoaded", function () {
    const addBtn = document.getElementById("add-btn");
    const deleteBtn = document.getElementById("delete-btn");
    const deleteConfirmModal = document.getElementById("delete-confirm-modal");
    const areYouSureModal = document.getElementById("are-you-sure-modal");
    const confirmDeleteBtn = document.getElementById("confirm-delete-btn");
    const cancelDeleteBtn = document.getElementById("cancel-delete-btn");
    const finalConfirmBtn = document.getElementById("final-confirm-btn");
    const finalCancelBtn = document.getElementById("final-cancel-btn");
    const deleteLineNumberInput = document.getElementById("delete-line-number");
    const payrollTableBody = document.querySelector("#payroll-table tbody");

    let payrollList = [];
    let pendingDeleteIndex = null;

    deleteBtn.addEventListener("click", () => {
        const lineNumber = parseInt(deleteLineNumberInput.value, 10);

        if (!isNaN(lineNumber) && lineNumber > 0 && lineNumber <= payrollList.length) {
            pendingDeleteIndex = lineNumber - 1;
            deleteConfirmModal.style.display = "flex";
        } else {
            alert("Invalid line number. Please enter a valid number.");
        }
    });

    confirmDeleteBtn.addEventListener("click", () => {
        deleteConfirmModal.style.display = "none";
        areYouSureModal.style.display = "flex"; 
    });

    cancelDeleteBtn.addEventListener("click", () => {
        deleteConfirmModal.style.display = "none";
        pendingDeleteIndex = null;
    });

    finalConfirmBtn.addEventListener("click", () => {
        if (pendingDeleteIndex !== null) {
            payrollList.splice(pendingDeleteIndex, 1);w
            renderPayrollTable();
        }
        areYouSureModal.style.display = "none";
        deleteLineNumberInput.value = "";
        pendingDeleteIndex = null;
    });

    finalCancelBtn.addEventListener("click", () => {
        areYouSureModal.style.display = "none";
        pendingDeleteIndex = null;
    });

    function renderPayrollTable() {
        payrollTableBody.innerHTML = "";
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
});
