import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const MATERIAL_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,

  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatTabsModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
];