import { Component, signal } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '../../../shared/material';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:
    [
      ReactiveFormsModule,
      CommonModule,
      ...MATERIAL_MODULES
    ],
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
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

 onLogin() {
    const { username, password } = this.loginForm.value;
    const isAuthenticated = this.auth.login({ username, password });
    if (isAuthenticated) {
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/menu';
      alert('Login Successful');
      this.router.navigate([returnUrl]);
    } 
  }

  togglePassword() {
    this.hide.set(!this.hide());
  }

  hidePassword() {
    return this.hide();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
