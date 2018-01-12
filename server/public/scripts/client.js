// variables to start annual and monthly calcualtions
// var annualSalary = 0;
// var monthlyCost = 0;
// var employeeCount = 1;
$(document).ready(start);
//event listeners
function start () {
  // salarySum();
  // $('#employeeTableBody').on('click', '#remove', removeEmployee);
  $('#submitBtn').on('click', addEmployee);
}

// Function to add user input to the table.
function addEmployee () {
  console.log('successful click');
  
  let employee = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val(),
    idNumber: $('#idNumber').val(),
    jobTitle: $('#jobTitle').val(),
    annualSalary: $('#annaulSalary').val()
  };

  $.ajax({
    method: "POST",
    url: '/employee',
    data: employee,
    success: function (response) {
      console.log('successful employee response: ', response);
    }
  });
}

//add new employee
function addNewEmployee () {

}
// Function to total salaries that user enters.
function salarySum () {
  return annualSalary += Number($('#annualSal').val());
}// end salarySum

// Function to total monthly costs
function monthlySum () {
  return monthlyCost += Number(Math.round($('#annualSal').val()/12));
}// end monthlySum

// Function to remove an employee when button is clicked.
function removeEmployee () {
  $(this).parent().parent().remove();
  // removes deleted employee salary from total;
  var empSalary = $(this).closest('tr').find('.sal').text();
  annualSalary -= empSalary;
  $('#totalSalaries').text('Total:' + salarySum());
  // removes deleted employee monthly cost from total;
  var empCost = $(this).closest('tr').find('.cost').text();
  monthlyCost -= empCost;
  $('#monthlyCosts').text('Total:' + monthlySum());

} // end removeEmployee





// var $row = $('<tr><td></td></tr>');
// $row.append($('#firstName').val());
// $row.append('<td>' + $('#lastName').val() + '</td>');
// $row.append('<td>' + $('#idNumber').val() + '</td>');
// $row.append('<td>' + $('#jobTitle').val() + '</td>');
// $row.append('<td class="sal">' + $('#annualSal').val() + '</td>');
// $row.append('<td class="cost">' + Math.round(($('#annualSal').val()/12)) + '</td>');
// $row.append('<td id="row"> <button type="button" id="remove">Delete</button> </td>'); // remove employee button
// $('#totalSalaries').text('Total:' + salarySum()); // totals salary after adding salarySum function
// $('#monthlyCosts').text('Total:' + monthlySum()); // totals monthly Costs
// $('#employeeTableBody').append($row);
// $('input').val(''); // empties input fields once submit button is pressed.
// }// end addEmployee