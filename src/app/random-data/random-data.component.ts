import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTitle } from '../shared/models/static.model';
import { MatTableDataSource } from '@angular/material/table';
import { changeTypeHeadings } from '../shared/mocks/static.mock';
import { MatChipsModule } from '@angular/material/chips';
import { ChangeTableRandomComponent } from '../shared/components/change-table-random/change-table-random.component';
import { MatSortModule } from '@angular/material/sort';
import { Changes } from '../shared/models/generated.model';
import { getChanges } from '../shared/mocks/generated-mock';

@Component({
  selector: 'app-random-data',
  standalone: true,
  imports: [
    CommonModule,
    ChangeTableRandomComponent,
    MatChipsModule,
    MatSortModule,
  ],
  templateUrl: './random-data.component.html',
  styleUrls: ['./random-data.component.scss'],
})
export class RandomDataComponent implements OnInit {
  displayedColumns: ChangeTitle[] = changeTypeHeadings;
  dataSource = new MatTableDataSource<Changes>([]);

  ngOnInit(): void {
    this.dataSource.data = getChanges().changes;
    console.log(this.dataSource.data);
  }
}
