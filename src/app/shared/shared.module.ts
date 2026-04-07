
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
    declarations: [],
    exports: [
        MatTabsModule,
        MatIconModule, 
        MatButtonModule,
        MatBadgeModule, 
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
      ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,  
        MatTabsModule
      ],
    providers: []
})
export class SharedModule {}