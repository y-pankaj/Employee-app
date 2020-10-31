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

  private registrationForm: FormGroup;

  employeeInfo = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      name : new FormControl('', Validators.required),
      position : new FormControl('', Validators.required),
      about : new FormControl('', Validators.required),
      joiningDate : new FormControl('', Validators.required),
    });
  }

  onSubmit( ) {
    if( !this.formValidate()){
      return false;
    }
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

  formValidate() {
    let formValue = this.registrationForm.value
    let allFieldsValid = formValue.name.length > 0 && formValue.position.length > 0
                          formValue.aboutlength > 0 && formValue.joiningDate.length > 0 
    return allFieldsValid;
  }

}
