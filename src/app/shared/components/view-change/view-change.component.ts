import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ChangeType, ReleaseChanges } from 'src/app/shared/models/static.model';

@Component({
  selector: 'app-view-change',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './view-change.component.html',
  styleUrls: ['./view-change.component.scss'],
})
export class ViewChangeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ReleaseChanges) {}
}
