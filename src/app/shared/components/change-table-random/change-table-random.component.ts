import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ChangeTitleRandom } from '../../models/static.model';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ViewChangeComponent } from '../view-change/view-change.component';
import { MatSortModule } from '@angular/material/sort';
import { AdvisoryChanges, Changes } from '../../models/generated.model';

@Component({
  selector: 'app-change-table-random',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
  ],
  templateUrl: './change-table-random.component.html',
  styleUrls: ['./change-table-random.component.scss'],
})
export class ChangeTableRandomComponent {
  @Input() dataSource: MatTableDataSource<Changes> =
    new MatTableDataSource<Changes>();
  @Input() displayedColumns: ChangeTitleRandom[] = [];

  @ViewChild('paginator') paginator!: MatPaginator;

  pageSizes = [10, 15, 20, 25, 30, 50, 100];

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewChanges(element: any) {
    this.dialog.open(ViewChangeComponent, {
      data: element,
      width: '50%',
    });
  }
}
