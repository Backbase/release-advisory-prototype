import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import * as yaml from 'js-yaml';

@Injectable()
export class TopStackValueService {
  constructor(private http: HttpClient) {}

  getDataFromTopStack() {
    return this.http.get('../../assets/values.txt', {responseType: 'text'}).pipe(
        map((response: any) => {
          return yaml.load(response);
        })
      );
  }
}
