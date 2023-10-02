import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTitleRandom, ChangeType } from '../shared/models/static.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  calVerOptions,
  changeTypeHeadingsRandom,
  productList,
  disciplines,
  changeType,
} from '../shared/mocks/static.mock';
import { MatChipsModule } from '@angular/material/chips';
import { ChangeTableRandomComponent } from '../shared/components/change-table-random/change-table-random.component';
import { MatSortModule } from '@angular/material/sort';
import { Changes } from '../shared/models/generated.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import {
  Disciplines,
  ProductComponents,
} from '../shared/mocks/release-advisory-mock-generator/constants';
import { generateChangesData } from '../shared/mocks/release-advisory-mock-generator/generator';
import { CalverSelectComponent } from '../usecase-two/calver-select/calver-select.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-random-data',
  standalone: true,
  imports: [
    CommonModule,
    ChangeTableRandomComponent,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    CalverSelectComponent,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatSlideToggleModule,
  ],
  templateUrl: './prototype-three.component.html',
  styleUrls: ['./prototype-three.component.scss'],
})
export class PrototypeThreeComponent implements OnInit {
  public productList = productList;
  disciplineList = disciplines.filter(
    (discipline) => discipline.name !== Disciplines.backend
  );
  displayedColumns: ChangeTitleRandom[] = changeTypeHeadingsRandom;
  dataSource: MatTableDataSource<Changes> = new MatTableDataSource<Changes>([]);
  initDataSource: Changes[] = [];
  isLoading = false;
  readonly options: string[] = calVerOptions;

  readonly changeTypeList = [...changeType];

  advisoryForm = this.fb.group({
    source: ['', Validators.required],
    target: ['', Validators.required],
    discipline: ['', Validators.required],
    product: ['', Validators.required],
  });

  filteredOptionsSource!: Observable<string[]>;
  filteredOptionsTarget!: Observable<string[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filteredOptionsSource =
      this.advisoryForm.controls.source.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );

    this.filteredOptionsTarget =
      this.advisoryForm.controls.target.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );

    this.advisoryForm.valueChanges.subscribe((value) => {
      console.log(value);
      if (value.product && this.validateCalver(value.source, value.target)) {
        this.isLoading = true;
        setTimeout(() => {
          const generateMockData = generateChangesData(
            value.product as ProductComponents,
            value.source,
            value.target,
            value.discipline
          );

          this.initDataSource = [...generateMockData.changes];

          this.dataSource = new MatTableDataSource<Changes>(
            generateMockData.changes
          );

          this.isLoading = false;
        }, 1500);
      }
    });
  }

  filterByChangeType(changeType: ChangeType) {
    // update changeTypeList with changeType isChecked
    const index = this.changeTypeList.findIndex(
      (change) => change.name === changeType.name
    );

    this.changeTypeList[index].isChecked =
      !this.changeTypeList[index].isChecked;

    this.dataSource.data = this.filterByChangeTypeList();

    this.dataSource._updateChangeSubscription();
    this.dataSource._updatePaginator(this.dataSource.data.length);
  }

  private _filter(value: string): string[] {
    return this.options.filter((option) =>
      option?.toLowerCase().includes(value)
    );
  }

  private validateCalver(source: string, target: string): boolean {
    return (
      source.length >= 7 &&
      target.length >= 7 &&
      new Date(target) > new Date(source)
    );
  }

  private filterByChangeTypeList() {
    const dataSource = [...this.initDataSource];

    const filterChangeTypeList = this.changeTypeList
      .filter((change) => change.isChecked)
      .map((change) => change.name);

    if (filterChangeTypeList.length === this.changeTypeList.length)
      return dataSource;

    return dataSource.filter((datum) => {
      return filterChangeTypeList.includes(datum.changeType.name);
    });
  }
}
