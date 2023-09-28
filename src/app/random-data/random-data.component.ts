import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTitle, ProductComponent } from '../shared/models/static.model';
import { MatTableDataSource } from '@angular/material/table';
import { changeTypeHeadings, productList } from '../shared/mocks/static.mock';
import { MatChipsModule } from '@angular/material/chips';
import { ChangeTableRandomComponent } from '../shared/components/change-table-random/change-table-random.component';
import { MatSortModule } from '@angular/material/sort';
import { Changes } from '../shared/models/generated.model';
import { getChanges } from '../shared/mocks/generated-mock';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { ProductComponents } from '../shared/mocks/release-advisory-mock-generator/constants';

@Component({
  selector: 'app-random-data',
  standalone: true,
  imports: [
    CommonModule,
    ChangeTableRandomComponent,
    MatChipsModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatRadioModule,
  ],
  templateUrl: './random-data.component.html',
  styleUrls: ['./random-data.component.scss'],
})
export class RandomDataComponent {
  public productList = productList;
  displayedColumns: ChangeTitle[] = changeTypeHeadings;
  dataSource = new MatTableDataSource<Changes>([]);
  isLoading = false;

  onProductChange(product: ProductComponent): void {
    this.isLoading = true;

    setTimeout(() => {
      this.dataSource.data = getChanges(
        product.name as ProductComponents
      ).changes;
      this.isLoading = false;
    }, 2000);
  }
}
