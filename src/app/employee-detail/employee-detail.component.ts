import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // get the employee info from the local storage
  employeeInfoInBrowser = localStorage.getItem('employeeInfoInBrowser');
  employees = JSON.parse(this.employeeInfoInBrowser);

  // event handler to delete an employee card, employee info is also passed as an argument to this funtion
  deleteEmployee(toDeleteEmployee) {
    // keep all other employee objects other than the one we have to delete
    this.employees = this.employees.filter( employee => employee != toDeleteEmployee);
    localStorage.removeItem('employeeInfoInBrowser');
    localStorage.setItem('employeeInfoInBrowser', JSON.stringify(this.employees));
  }
  
}
