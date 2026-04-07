import { Component, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-register',
  standalone: true,
  imports:
    [ReactiveFormsModule,
      CommonModule,
      SharedModule],
  styleUrl: './register.css',
  templateUrl: './register.html',
})

export class Register {

  registerForm: FormGroup;
  hide = signal(true);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
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

  onRegister() {
    this.auth.register(this.registerForm.value);
    alert('Registration Successful');
    this.router.navigate(['/']);
  }

  goToLogin() {
    this.router.navigate(['/']);
  }
}

