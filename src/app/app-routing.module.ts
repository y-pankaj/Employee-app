import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: 'register', component: RegistrationFormComponent },
  { path: 'details', component: EmployeeDetailComponent },
  { path: '**', redirectTo: '/register'} // redirect all other paths to registration view
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ EmployeeDetailComponent, RegistrationFormComponent]