import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Form, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  // instance of FormGroup for handling of registration form
  private registrationForm: FormGroup;

  employeeInfo = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // declaring the fields in the form
    this.registrationForm = new FormGroup({
      name : new FormControl('', Validators.required),
      position : new FormControl('', Validators.required),
      about : new FormControl('', Validators.required),
      joiningDate : new FormControl('', Validators.required),
    });
  }

  onSubmit( ) {
    // if the form is not valid, return false to form
    if( !this.formValidate()){
      return false;
    }
    // fetching employees info from local storage using the variable 'employeeInfoInBrowser'
    let employeeInfoInBrowser = localStorage.getItem('employeeInfoInBrowser');
    let employeeInfo = [];
    
    // checking if 'employeeInfoInBrowser' variable exits in local storage or not and pushing
    // the new employee info accordingly
    if (!employeeInfoInBrowser) {
      employeeInfo.push(this.registrationForm.value);
    }
    else{
      employeeInfo = JSON.parse(employeeInfoInBrowser);
      employeeInfo.push(this.registrationForm.value);
      localStorage.removeItem('employeeInfoInBrowser');
    }
    // storing the employee info in local storage
    localStorage.setItem('employeeInfoInBrowser', JSON.stringify(employeeInfo));

    // navigating to the details page after storing the employee info in local storage
    this.router.navigate(['/details']);
  }

  // funtion to validate the form, input fields should not be empty
  formValidate() {
    let formValue = this.registrationForm.value
    let allFieldsValid = formValue.name.length > 0 && formValue.position.length > 0
                          formValue.about.length > 0 && formValue.joiningDate.length > 0 
    return allFieldsValid;
  }

}
