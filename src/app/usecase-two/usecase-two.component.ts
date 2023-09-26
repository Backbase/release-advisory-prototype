import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, map, startWith } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { CalverSelectComponent } from './calver-select/calver-select.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { ChangeTableComponent } from '../shared/components/change-table/change-table.component';
import {
  calVerOptions,
  changeType,
  changeTypeHeadings,
  components,
  dataSource,
  disciplines,
  journeys,
  productList,
} from '../shared/mocks/static.mock';
import {
  ChangeTitle,
  ChangeType,
  ReleaseChanges,
} from '../shared/models/static.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usecase-two',
  standalone: true,
  imports: [
    CommonModule,
    CalverSelectComponent,
    ChangeTableComponent,
    MatSlideToggleModule,
    MatChipsModule,
    MatInputModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './usecase-two.component.html',
  styleUrls: ['./usecase-two.component.scss'],
})
export class UsecaseTwoComponent {
  constructor(private fb: FormBuilder) {}

  readonly options: string[] = calVerOptions;
  readonly disciplines = disciplines;
  readonly changeType = changeType;
  readonly components = components;
  readonly products = productList;
  readonly journey = journeys;

  isLoading = false;

  advisoryForm = this.fb.group({
    source: ['', Validators.required],
    target: ['', Validators.required],
    // filterByCalver: [''],
  });

  filteredOptionsSource!: Observable<string[]>;
  filteredOptionsTarget!: Observable<string[]>;

  displayedColumns: ChangeTitle[] = changeTypeHeadings;
  dataSource = new MatTableDataSource<ReleaseChanges>(dataSource);

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
      if (value.source && value.target) {
        this.isLoading = true;
        setTimeout(() => {
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
}
