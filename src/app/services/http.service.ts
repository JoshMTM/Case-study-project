import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {environment as env } from 'src/environments/environment';
import { APIResponse, Beer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeerList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Beer>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    return this.http.get<APIResponse<Beer>>(`${env.BASE_URL}/beers`, {
      params: params,
    })
  }
}
