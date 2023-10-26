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
  readonly productList = productList;
  readonly disciplineList = disciplines;
  readonly displayedColumns: ChangeTitleRandom[] = changeTypeHeadingsRandom;
  readonly options: string[] = calVerOptions;
  readonly changeTypeList = [...changeType];
  readonly disciplineForm = {
    [Disciplines.android]: [false],
    [Disciplines.backend]: [true],
    [Disciplines.ios]: [false],
    [Disciplines.web]: [false],
  };

  dataSource: MatTableDataSource<Changes> = new MatTableDataSource<Changes>([]);
  initDataSource: Changes[] = [];
  isLoading = false;
  isBackendEnabled = true;

  advisoryForm = this.fb.group({
    source: ['', Validators.required],
    target: ['', Validators.required],
    discipline: this.fb.group({
      [Disciplines.android]: [false],
      [Disciplines.backend]: [true, Validators.requiredTrue],
      [Disciplines.ios]: [false],
      [Disciplines.web]: [false],
    }),
    product: ['', Validators.required],
  });

  filterForm = this.fb.group({
    changeType: this.fb.group({
      [ChangeTypeName.breakingChange]: [true],
      [ChangeTypeName.bugFix]: [true],
      [ChangeTypeName.deprecated]: [true],
      [ChangeTypeName.feature]: [true],
      [ChangeTypeName.securityFix]: [true],
      [ChangeTypeName.updated]: [true],
    }),
    enableBackend: [false, Validators.required],
    discipline: this.fb.group(this.disciplineForm),
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
      if (
        value.product &&
        this.validateCalver(value.source, value.target) &&
        this.advisoryForm.valid
      ) {
        this.isLoading = true;
        setTimeout(() => {
          this.initMockData(value);
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

      const selectedDisciplines = Object.keys(value.discipline).filter(
        (key) => value.discipline[key]
      );

      selectedChangeType.push(Disciplines.backend);

      if (value.enableBackend) {
        newDataSource = [
          ...newDataSource.filter((data) => {
            return data.discipline !== Disciplines.backend;
          }),
        ];
      }

      if (selectedChangeType.length === this.changeTypeList.length)
        this.dataSource.data = newDataSource;

      this.dataSource.data = newDataSource.filter((datum) => {
        return (
          selectedChangeType.includes(datum.changeType.name) &&
          selectedDisciplines.includes(datum.discipline as string)
        );
      });

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

  private initMockData(value): void {
    const selectedDisciplines = Object.keys(value.discipline).filter(
      (key) => value.discipline[key]
    );

    this.disciplineList.forEach((discipline) => {
      discipline.isSelected = selectedDisciplines.includes(discipline.name);
      this.filterForm.controls?.discipline?.controls[discipline.name].setValue(
        discipline.isSelected
      );
    });

    const generatedData = generateChangesData(
      value.product as ProductComponents,
      value.source,
      value.target,
      selectedDisciplines
    );

    this.initDataSource = [...generatedData.changes];

    this.dataSource = new MatTableDataSource<Changes>(generatedData.changes);
  }
}
