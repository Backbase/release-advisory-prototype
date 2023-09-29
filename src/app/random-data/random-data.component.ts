import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeTitleRandom, Discipline } from '../shared/models/static.model';
import { MatTableDataSource } from '@angular/material/table';
import {
  calVerOptions,
  changeTypeHeadingsRandom,
  productList,
  disciplines,
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
    CalverSelectComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './random-data.component.html',
  styleUrls: ['./random-data.component.scss'],
})
export class RandomDataComponent implements OnInit {
  public productList = productList;
  disciplineList = disciplines.filter(
    (discipline) => discipline.name !== Disciplines.backend
  );
  displayedColumns: ChangeTitleRandom[] = changeTypeHeadingsRandom;
  dataSource = new MatTableDataSource<Changes>([]);
  isLoading = false;
  readonly options: string[] = calVerOptions;

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
          this.dataSource.data = generateChangesData(
            value.product as ProductComponents,
            value.source,
            value.target,
            value.discipline
          ).changes;

          this.isLoading = false;
        }, 1500);
      }
    });
  }

  private _filter(value: string): string[] {
    return this.options.filter((option) =>
      option?.toLowerCase().includes(value)
    );
  }

  private validateCalver(source: string, target: string): boolean {
    const sourceTemp = source.split('.');
    const targetTemp = target.split('.');

    return (
      source.length >= 7 &&
      target.length >= 7 &&
      +targetTemp[1] > +sourceTemp[1]
    );
  }
}
