import { Component, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';


@Component({
  selector: 'app-login',
  standalone: true,
  imports:
    [ReactiveFormsModule,
      CommonModule,
      SharedModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  error = false;
  loginForm: FormGroup;
  hide = signal(true);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  togglePassword() {
    this.hide.set(!this.hide());
  }

  hidePassword() {
    return this.hide();
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    if (this.auth.login(username!, password!)) {
      alert('Login Successful');
      this.router.navigate(['/menu']);
    } else {
      this.error = true;
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
