import { Component, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { MATERIAL_MODULES } from '../../../shared/material';

@Component({
  selector: 'app-register',
  standalone: true,
  imports:
    [
      ReactiveFormsModule,
      CommonModule,
      ...MATERIAL_MODULES
    ],
  styleUrl: './register.css',
  templateUrl: './register.html',
})

export class Register {
  error: boolean = false;
  registerForm: FormGroup;
  hide = signal(true);

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onRegister() {
    const formData = this.registerForm.value;
    const isRegistered = this.auth.register(formData);

    if (isRegistered) {
      this.auth.login(formData);
      alert('Registration Successful');
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/menu';
      this.router.navigate([returnUrl]);
    } 
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

    togglePassword() {
    this.hide.set(!this.hide());
  }

  hidePassword() {
    return this.hide();
  }
}

