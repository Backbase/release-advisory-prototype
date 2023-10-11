import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ChangeType, ReleaseChanges } from 'src/app/shared/models/static.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-view-change',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './view-change.component.html',
  styleUrls: ['./view-change.component.scss'],
})
export class ViewChangeComponent {
  data: ReleaseChanges;
  currentIndex: number = 0;
  isFirstElement: boolean = true;
  isLastElement: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public releaseData: any) {}

  ngOnInit(): void {
    this.currentIndex = this.releaseData.dataSource.findIndex(
      (element) => element.id === this.releaseData.id
    );
    this.data = this.releaseData.dataSource[this.currentIndex];
    this.initDetailsNavigationButton();
  }

  getReleaseDetails(type: string) {
    if (type === 'previous' && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (
      type === 'next' &&
      this.currentIndex < this.releaseData.dataSource.length - 1
    ) {
      this.currentIndex++;
    }
    this.initDetailsNavigationButton();
    this.data = this.releaseData.dataSource[this.currentIndex];
  }

  initDetailsNavigationButton() {
    this.isFirstElement = this.currentIndex === 0;
    this.isLastElement =
      this.currentIndex === this.releaseData.dataSource.length - 1;
  }
}
