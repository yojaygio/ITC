
document.addEventListener("DOMContentLoaded", function () {
    function goToAssignment(assignmentPage) {
        window.location.href = assignmentPage;
    }
    const assignmentButtons = document.querySelectorAll('.assignment-btn');
    assignmentButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const targetPage = button.getAttribute('onclick').match(/'([^']+)'/)[1];
            goToAssignment(targetPage);
        });
    });
    const goToAssignmentButton = document.querySelector('.go-btn');
    goToAssignmentButton.addEventListener('click', function () {
        goToAssignment('homework.html');
    });
});
