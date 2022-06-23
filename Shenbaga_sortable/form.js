let form_data = [];

var employeeData = JSON.parse(localStorage.getItem('sortedList')) || [];

function formData() {

    let employeeName = document.getElementById('full-name').value;
    let employeeEmail = document.getElementById('email').value;
    let employeeAddress = document.getElementById('permanent-address').value;
    let employeeRoles = document.getElementById('roles').value;

    const employeeDetails = {
        name: employeeName,
        email: employeeEmail,
        address: employeeAddress,
        roles: employeeRoles,
    }

    employeeData.push(employeeDetails);
    localStorage.setItem("sortedList", JSON.stringify(employeeData));

    window.location.href = "sortable.html";
}