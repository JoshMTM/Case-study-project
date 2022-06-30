import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {environment as env } from 'src/environments/environment';
import { Beer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeerList(
    ordering: string,
    search?: string
  ): Observable<Array<Beer>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    return this.http.get<Array<Beer>>(`${env.BASE_URL}/beers`, {
      params: params,
    })
  }
}
