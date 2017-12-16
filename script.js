var annualSalary = 0;

$(document).ready(start);
console.log('ready');
// Accepts Jquery functions
function start () {
$('#employeeTableBody').on('click', '#remove', removeEmployee);
$('#submitBtn').on('click', addEmployee);
}
console.log('readyagain');
// Function to add user input to the table.
function addEmployee () {
  var $row = $('<tr>');
$row.append('<td>' + $('#lastName').val() + '</td>'); // appending user last name
$row.append('<td>' + $('#firstName').val() + '</td>'); // appending user first name
$row.append('<td>' + $('#idNumber').val() + '</td>'); // appending user id number
$row.append('<td>' + $('#jobTitle').val() + '</td>'); // appending user job title
$row.append('<td>' + $('#annualSal').val() + '</td>'); // appending user salary
$row.append('<td> <button type="button" id="remove">Remove Employee</button> </td>'); // adding remove employee button to each employee
$('#totalSalaries').text(salarySum()); // totals salary after adding salarySum function
$('#employeeTableBody').append($row);
$('input').val(''); // empties input fields once submit button is pressed.
}// end addEmployee

// Function to total salaries that users enter.
function salarySum () {
return annualSalary += Number($('#annualSal').val());
}// end salarySum

// Function to remove an employee when button is clicked.
function removeEmployee () {
$(this).parent().parent().remove();
} // end removeEmployee
