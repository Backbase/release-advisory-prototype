import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChangeTableComponent } from '../shared/components/change-table/change-table.component';
import {
  changeType,
  changeTypeHeadings,
  dataSource,
  components,
  productList,
  calVerOptions,
  disciplines,
} from '../shared/mocks/static.mock';
import {
  ChangeTitle,
  ChangeType,
  ReleaseChanges,
} from '../shared/models/static.model';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-usecase-one',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    ChangeTableComponent,
    MatCheckboxModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './usecase-one.component.html',
  styleUrls: ['./usecase-one.component.scss'],
})
export class UsecaseOneComponent {
  constructor(private fb: FormBuilder) {}
  public displayedColumns: ChangeTitle[] = changeTypeHeadings;
  public changeTypeList = changeType;
  public componentList = components;
  public dataSource = new MatTableDataSource<ReleaseChanges>(dataSource);
  public showFilters = false;
  public readonly versionList = [...calVerOptions];
  public productList = productList;
  releaseAdivsorForm = this.fb.group({
    sourceVersion: ['', Validators.required],
    targetVersion: ['', Validators.required],
  });
  filteredSourceVersion!: Observable<string[]>;
  filteredTargetVersion!: Observable<string[]>;
  isLoading = false;

  @ViewChild('paginator') paginator!: MatPaginator;

  public readonly disciplineList = disciplines;

  ngOnInit() {
    this.filteredSourceVersion =
      this.releaseAdivsorForm.controls.sourceVersion.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );

    this.filteredTargetVersion =
      this.releaseAdivsorForm.controls.targetVersion.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );

    this.releaseAdivsorForm.valueChanges.subscribe((value) => {
      if (value.sourceVersion && value.targetVersion) {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1500);
      }
    });
  }

  private _filter(value: string): string[] {
    return this.versionList.filter((version) =>
      version?.toLowerCase().includes(value)
    );
  }

  public clear(ctrl: FormControl) {
    ctrl.setValue('');
  }
}
