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
  employeeInfoInBrowser = localStorage.getItem('employeeInfoInBrowser');
  employees = JSON.parse(this.employeeInfoInBrowser);


  deleteEmployee( toDeleteEmployee) {
    this.employees = this.employees.filter( employee => employee != toDeleteEmployee);
    localStorage.removeItem('employeeInfoInBrowser');
    localStorage.setItem('employeeInfoInBrowser', JSON.stringify(this.employees));
    console.log(this.employees);
  }
  
}
