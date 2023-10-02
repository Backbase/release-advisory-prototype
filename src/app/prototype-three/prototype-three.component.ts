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
  ChangeTypeName,
  Disciplines,
  ProductComponents,
} from '../shared/mocks/release-advisory-mock-generator/constants';
import { generateChangesData } from '../shared/mocks/release-advisory-mock-generator/generator';
import { CalverSelectComponent } from '../usecase-two/calver-select/calver-select.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HighlightSearchPipe } from '../shared/pipes/highlight.pipe';

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
    HighlightSearchPipe,
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
  isBackendEnabled = true;
  readonly options: string[] = calVerOptions;

  readonly changeTypeList = [...changeType];

  advisoryForm = this.fb.group({
    source: ['', Validators.required],
    target: ['', Validators.required],
    discipline: ['', Validators.required],
    product: ['', Validators.required],
  });

  filterForm = this.fb.group({
    changeType: this.fb.group({
      [ChangeTypeName.breakingChange]: [true],
      [ChangeTypeName.bugFix]: [true],
      [ChangeTypeName.deprecated]: [true],
      [ChangeTypeName.feature]: [true],
      [ChangeTypeName.securityFix]: [true],
    }),
    enableBackend: [false, Validators.required],
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

          this.resetFilters();

          this.isLoading = false;
        }, 1500);
      }
    });

    this.filterForm.valueChanges.subscribe((value) => {
      let newDataSource = [...this.initDataSource];

      const keys = Object.keys(this.filterForm.value.changeType);

      const selectedChangeType = keys.filter(
        (key) => this.filterForm.value.changeType[key]
      );

      if (value.enableBackend) {
        newDataSource = [
          ...newDataSource.filter((data) => {
            return data.discipline !== Disciplines.backend;
          }),
        ];
      }

      if (selectedChangeType.length === this.changeTypeList.length)
        this.dataSource.data = newDataSource;

      this.dataSource.data = newDataSource.filter((datum) =>
        selectedChangeType.includes(datum.changeType.name)
      );

      this.updateDataSource();
    });
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

  private updateDataSource() {
    this.dataSource._updateChangeSubscription();
    this.dataSource._updatePaginator(this.dataSource.data.length);
  }

  private resetFilters(): void {
    this.filterForm.patchValue({
      changeType: {
        [ChangeTypeName.breakingChange]: true,
        [ChangeTypeName.bugFix]: true,
        [ChangeTypeName.deprecated]: true,
        [ChangeTypeName.feature]: true,
        [ChangeTypeName.securityFix]: true,
      },
      enableBackend: false,
    });
  }
}
