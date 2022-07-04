import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {environment as env } from 'src/environments/environment';
import {  Beer } from '../models';

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

  // Call in order to save beer to database

  saveToDatabase(search: string) {

    search = search.toLowerCase().replace(/ /g, '_')

    this.http.get<any>(`${env.BASE_URL}/beers?beer_name=${search}`).subscribe(data => {
      if (data) {
        const beer = {
          id: data[0].id,
          image_url : data[0].image_url,
          name: data[0].name,
          description: data[0].description,
        }
        this.http.post<{message: string}>("http://localhost:3000/api/beers", beer).subscribe((responseData) => {
        console.log(responseData.message)})
      }

      else {
        console.log('Beer not found!')
      }
    })
  }

  retrieveFromDatabase() {
    this.http.get<any>('http://localhost:3000/api/beers')
    .subscribe((beerList) => {
      const savedBeers: Array<any> = beerList.beers;
      console.log(savedBeers)
      return savedBeers;
    })
  }
}
