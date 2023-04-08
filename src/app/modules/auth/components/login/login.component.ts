import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type LoginForm = 'email' | 'password';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm : FormGroup = this.fb.group({
    email: ['test@gmail.com', [Validators.required, Validators.email] ],
    password: ['Qwe123', [ Validators.required, Validators.minLength(6) ]]
  })

  constructor(
    private readonly auth : AuthService,
    private readonly fb : FormBuilder,
    ){}
  
  logIn(){
    if(this.loginForm.invalid) return
    this.auth.sendLogIn(this.loginForm.value).subscribe()
  }

  isValid( field: LoginForm ){
    return (this.loginForm.get(field)?.invalid && this.loginForm.get(field)?.touched)
  }

}
