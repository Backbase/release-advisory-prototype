import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTitleRandom } from '../shared/models/static.model';
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
import {
  FormBuilder,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HighlightSearchPipe } from '../shared/pipes/highlight.pipe';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-prototype-four',
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
    MatCheckboxModule,
  ],
  templateUrl: './prototype-four.component.html',
  styleUrls: ['./prototype-four.component.scss'],
})
export class PrototypeFourComponent implements OnInit {
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

  readonly ProductForm = {
    [ProductComponents.businessBankingUSA]: [false],
    [ProductComponents.businessBankingUniversal]: [false],
    [ProductComponents.digitalAssist]: [false],
    [ProductComponents.digitalEngage]: [false],
    [ProductComponents.retailBankingUSA]: [false],
    [ProductComponents.retailBankingUniversal]: [false],
    [ProductComponents.wealthManagement]: [false],
  };

  readonly changeTypeForm = {
    [ChangeTypeName.bugFix]: [true],
    [ChangeTypeName.breakingChange]: [true],
    [ChangeTypeName.deprecated]: [true],
    [ChangeTypeName.feature]: [true],
    [ChangeTypeName.securityFix]: [true],
  };

  dataSource: MatTableDataSource<Changes> = new MatTableDataSource<Changes>([]);
  initDataSource: Changes[] = [];
  isLoading = false;
  isBackendEnabled = true;
  filteredCalVerOptions = calVerOptions;

  advisoryForm = this.fb.group({
    source: ['', Validators.required],
    target: ['', Validators.required],
    discipline: this.fb.group(this.disciplineForm),
    product: this.fb.group(this.ProductForm),
  });

  filterForm = this.fb.group({
    calVer: [''],
    changeType: this.fb.group(this.changeTypeForm),
    discipline: this.fb.group(this.disciplineForm),
    enableBackend: [false, Validators.required],
    product: this.fb.group(this.ProductForm),
  });

  filteredOptionsSource!: Observable<string[]>;
  filteredOptionsTarget!: Observable<string[]>;
  filteredOptionsCalVer!: Observable<string[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filteredOptionsSource =
      this.advisoryForm.controls.source.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(this.options, value || ''))
      );

    this.filteredOptionsTarget =
      this.advisoryForm.controls.target.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(this.options, value || ''))
      );

    this.filteredOptionsCalVer =
      this.filterForm.controls.calVer.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(this.filteredCalVerOptions, value || ''))
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

    this.filterFormChanges();
  }

  isProductSelected(): boolean {
    const currentValue = this.advisoryForm.controls.product.value;

    const keys = Object.keys(currentValue);
    return keys.some((key) => currentValue[key]);
  }

  isDisciplineSelected(): boolean {
    const currentValue = this.advisoryForm.controls.discipline.value;

    const keys = Object.keys(currentValue);
    return keys.some((key) => currentValue[key]);
  }

  private _filter(options: string[], value: string): string[] {
    return options.filter((option) => option?.toLowerCase().includes(value));
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
    const selectedDisciplinesKeys = Object.keys(value.discipline);
    const selectedProductKeys = Object.keys(value.product);

    this.filterForm.controls.discipline.patchValue(
      this.advisoryForm.controls.discipline.value
    );

    const generatedData = [];

    const selectedProducts = selectedProductKeys.filter(
      (key) => value.product[key]
    );

    selectedProducts.forEach((product) =>
      this.filterForm.controls.product.controls[product].patchValue(true)
    );

    selectedProducts.forEach((product) => {
      generatedData.push(
        ...generateChangesData(
          product,
          value.source,
          value.target,
          selectedDisciplinesKeys.filter((key) => value.discipline[key])
        ).changes
      );
    });

    generatedData.sort((a, b) => a.calVer.localeCompare(b.calVer));

    this.initDataSource = [...generatedData];

    this.dataSource = new MatTableDataSource<Changes>(generatedData);

    const calVers = [...calVerOptions];

    const indexOfSource = calVers.indexOf(value.source);
    const indexOfTarget = calVers.indexOf(value.target);

    this.filteredCalVerOptions = calVers.slice(
      indexOfSource + 1,
      indexOfTarget + 1
    );
  }

  private filterFormChanges(): void {
    this.filterForm.valueChanges.subscribe((value) => {
      let newDataSource = [...this.initDataSource];

      const selectedChangeTypeKeys = Object.keys(value.changeType);
      const selectedDisciplinesKeys = Object.keys(value.discipline);
      const selectedProductKeys = Object.keys(value.product);

      const selectedChangeType = selectedChangeTypeKeys.filter(
        (key) => value.changeType[key]
      );

      const selectedDisciplines = selectedDisciplinesKeys.filter(
        (key) => value.discipline[key]
      );

      const selectedProducts = selectedProductKeys.filter(
        (key) => value.product[key]
      );

      // selectedChangeType.push(Disciplines.backend);

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
          datum.calVer.includes(value.calVer) &&
          selectedChangeType.includes(datum.changeType.name) &&
          selectedDisciplines.includes(datum.discipline as string) &&
          selectedProducts.includes(datum.product as string)
        );
      });

      this.updateDataSource();
    });
  }
}
