import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {
  ChangeTitle,
  ChangeType,
  ReleaseChanges,
} from '../../models/static.model';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ViewChangeComponent } from './view-change/view-change.component';

@Component({
  selector: 'app-change-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  templateUrl: './change-table.component.html',
  styleUrls: ['./change-table.component.scss'],
})
export class ChangeTableComponent {
  @Input() dataSource: MatTableDataSource<ReleaseChanges> =
    new MatTableDataSource<ReleaseChanges>();
  @Input() displayedColumns: ChangeTitle[] = [];

  @ViewChild('paginator') paginator!: MatPaginator;

  pageSizes = [5, 10, 15];

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewChanges(element: any) {
    const dialogRef = this.dialog.open(ViewChangeComponent, {
      data: element,
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
