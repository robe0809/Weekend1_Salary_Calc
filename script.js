// create employee object to store information on every employee
class EmployeeObject {
  constructor(name, idnumber, title, annualSalary) {
    this.name = name;
    this.id = idnumber;
    this.title = title;
    this.salary = annualSalary;
  }
}// end employee EmployeeObject

//some object literals to test my application
var ian = new EmployeeObject('Ian Robertson', 23453, 'Software Engineer', 2000000);
var mike = new EmployeeObject('Mike Anderson', 23453, 'Java Developer', 100000);

var emps = [ian, mike];
console.log(emps);

// Appending objects to the DOM
$(document).ready(start);
function start () {
addEmployee();
}

function addEmployee () {
  for(var i = 0; i < emps.length; i++) {
    var $row = $('<tr>');
    $row.append('<td>' + emps[i].name + '</td>');
    $row.append('<td>' + emps[i].id + '</td>');
    $row.append('<td>' + emps[i].title + '</td>');
    $row.append('<td>' + emps[i].salary + '</td>');
    $('#employeeTableBody').append($row);
  }
}
