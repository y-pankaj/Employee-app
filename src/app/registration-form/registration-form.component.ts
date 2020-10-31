import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Form } from '@angular/forms';
import { Router } from '@angular/router';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component2.html',
  styleUrls: ['./registration-form.component2.css']
})
export class RegistrationFormComponent implements OnInit {

  @Output() registrationFormInfo = new EventEmitter<FormGroup>();
  // @Output() agreed = new EventEmitter();
  employeeInfo = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registrationForm = new FormGroup({
    userName : new FormControl(''),
    position : new FormControl(''),
    about : new FormControl(''),
    joiningDate : new FormControl(''),
  });

  onSubmit( ) {
    let employeeInfoInBrowser = localStorage.getItem('employeeInfoInBrowser');
    let employeeInfo = [];
    // console.log(employeeInfoInBrowser);
    if (!employeeInfoInBrowser) {
      employeeInfo.push(this.registrationForm.value);
    }
    else{
      employeeInfo = JSON.parse(employeeInfoInBrowser);
      // console.log(JSON.stringify(this.registrationForm.value));
      employeeInfo.push(this.registrationForm.value);
      localStorage.removeItem('employeeInfoInBrowser');
    }
    localStorage.setItem('employeeInfoInBrowser', JSON.stringify(employeeInfo));
    this.router.navigate(['/details']);
  }

}
