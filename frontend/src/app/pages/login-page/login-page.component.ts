import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  nowYear: number = new Date().getFullYear()
  showPassword: boolean = false

  setShowPassword() {
    this.showPassword = !this.showPassword
  }

}
