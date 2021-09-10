import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form, [app-login-form]', //added [] because I want to import the component in an html tag
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  /**
   * The data variable has its structure in data/constants/pages/login/login.const.ts,
   * where the fields validation is done by shared/services/validation/validation.service.ts
   */
  // public data = CONST_LOGIN_PAGE;
  // public loginForm;

  // constructor(){
  //   this.loginForm = this.data.FORM;
  // }

  // get isValidForm() {
  //   return (this.loginForm.email.isValid() && this.loginForm.password.isValid());
  // }

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.loginForm = formBuilder.group({
      email: [],
      password: []
    });
  }

  authenticate(){
    console.log('Authenticate!');
  }

}
