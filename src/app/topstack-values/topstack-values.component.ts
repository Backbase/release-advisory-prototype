import { Component, OnInit } from '@angular/core';
import { TopStackValueService } from './topstack-values.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-topstack-values',
  templateUrl: './topstack-values.component.html',
  styleUrls: ['./topstack-values.component.scss'],
  standalone: true,
  providers: [TopStackValueService],
  imports: [
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    MatListModule
  ],
})
export class TopstackValuesComponent implements OnInit {
  topStackData = undefined;
  filteredData = undefined;
  products = [
    'retail-banking-usa-web',
    'retail-banking-usa-mobile',
    'retails-banking-universal',
    'retails-banking-universal-mobile',
    'business-banking-usa-mobile',
    'business-banking-usa-web',
    'business-banking-universal-web',
    'wealth-management-universal-web'
  ];
  constructor(private topStackValueService: TopStackValueService) {}

  ngOnInit(): void {
    this.topStackValueService.getDataFromTopStack().subscribe({
      next: (data: any) => {
        console.log(data);
        this.topStackData = data;
      },
    });
  }

  getServicesForRetail( productName: string) {
    this.filteredData = Object.keys(this.topStackData.applications)
      .filter((key) =>
        this.topStackData.applications[key]?.tags?.includes(
          productName
        )
      )
      .reduce((obj, key) => {
        obj[key] = this.topStackData.applications[key];
        return obj;
      }, {});
  }
}
