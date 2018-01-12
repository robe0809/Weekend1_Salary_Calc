class EmployeeObject {
    constructor (firstName, lastName, idNum, jobTitle, annualSalary) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.idNum = idNum;
      this.jobTitle = jobTitle;
      this.annualSalary = annualSalary;
    }
    monthlyCost () {
      return  Number(this.annaulSalary/12);
    }
  } // end EmployeeObject Class