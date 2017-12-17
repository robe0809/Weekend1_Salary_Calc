var annualSalary = 0;
var monthlyCost = 0;
var employeeCount = 1;
$(document).ready(start);

function start () {
$('#employeeTableBody').on('click', '#remove', removeEmployee);
$('#submitBtn').on('click', addEmployee);
}
// Function to add user input to the table.
function addEmployee () {
  var $row = $('<tr>');
  var $another = $('<tfoot><tr>');
$row.append('<td class="row">' + employeeCount++ + '</td>').fadeIn();
$row.append('<td class="row">' + $('#lastName').val() + '</td>').fadeIn();
$row.append('<td class="row">' + $('#firstName').val() + '</td>').fadeIn();
$row.append('<td class="row">' + $('#idNumber').val() + '</td>').fadeIn();
$row.append('<td class="row">' + $('#jobTitle').val() + '</td>').fadeIn();
$row.append('<td class="row">' + $('#annualSal').val() + '</td>').fadeIn();
$row.append('<td class="row">' + Math.round(($('#annualSal').val()/12)) + '</td>');
$row.append('<td class="row"> <button type="button" id="remove">Delete</button> </td>'); // remove employee button
$('#totalSalaries').text(salarySum()); // totals salary after adding salarySum function
//$('#monthlyCosts').text(Math.round((salarySum()/12))/100); // total monthly Cost based on all salaries.
$('#employeeTableBody').append($row);
$('input').val(''); // empties input fields once submit button is pressed.
}// end addEmployee

// Function to total salaries that user enters.
function salarySum () {
return annualSalary += Number($('#annualSal').val());
}// end salarySum

// Function to remove an employee when button is clicked.
function removeEmployee () {
$(this).parent().parent().remove();
} // end removeEmployee
