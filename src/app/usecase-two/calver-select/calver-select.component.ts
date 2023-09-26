import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calver-select',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './calver-select.component.html',
  styleUrls: ['./calver-select.component.scss'],
})
export class CalverSelectComponent {
  @Input() title = '';
  @Input() options: string[] = [];
  @Input() filteredOptions!: string[] | null;
  @Input() calverControl!: FormControl;
  @Input() disabled = false;

  clear() {
    this.calverControl.setValue('');
  }
}
