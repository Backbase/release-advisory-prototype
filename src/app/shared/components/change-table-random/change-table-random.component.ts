import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { ChangeTitleRandom } from '../../models/static.model';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ViewChangeComponent } from '../view-change/view-change.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Changes } from '../../models/generated.model';

@Component({
  selector: 'app-change-table-random',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
  ],
  templateUrl: './change-table-random.component.html',
  styleUrls: ['./change-table-random.component.scss'],
})
export class ChangeTableRandomComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<Changes> = null;
  @Input() displayedColumns: ChangeTitleRandom[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) set sort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortData = this.sortData();
  }

  sortData() {
    let sortFunction = (items: Changes[], sort: MatSort): Changes[] => {
      if (!sort.active || sort.direction === '') {
        return items;
      }

      return items.sort((a: any, b: any) => {
        let comparatorResult = 0;
        switch (sort.active) {
          case 'Discipline':
            comparatorResult = a.discipline.localeCompare(b.discipline);
            break;
          case 'Change Type':
            comparatorResult = a.changeType.name.localeCompare(
              b.changeType.name
            );
            break;
          case 'Calver':
            comparatorResult = a.calVer.localeCompare(b.calVer);
            break;
        }
        return comparatorResult * (sort.direction == 'asc' ? 1 : -1);
      });
    };

    return sortFunction;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewChanges(element: any) {
    this.dialog.open(ViewChangeComponent, {
      data: element,
      width: '50%',
    });
  }
}
