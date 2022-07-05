import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import {environment as env } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';
import {  Beer } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getBeerDetails //localhost:3000/api/beers", beer).subscribe((responseData) => {
    (id: number) {
      throw new Error('Method not implemented.');
  }
  Beers: any = []
  searchUpdated: BehaviorSubject<string>
  static getBeerList: any;


  constructor(private http: HttpClient) { 
    this.searchUpdated = new BehaviorSubject('')
  }

  passSearchQuery(search: string) {
    this.searchUpdated.next(search)
  }

  // getBeerList(
  //   ordering: string,
  //   search?: string
  // ): Observable<Array<Beer>> {
  //   let params = new HttpParams().set('ordering', ordering);

  //   if (search) {
  //     params = new HttpParams().set('ordering', ordering).set('search', search);
  //   }
  //   return this.http.get<Array<Beer>>(`${env.BASE_URL}/beers`, {
  //     params: params,
  //   })
  // }

  // retrieve all the beers in the database
  getBeerDatabase(){
    return this.http.get<any>("http://localhost:3000/api/beers")
  }

  // Retrieve the home page beers from backend API
  getBeerList() {
    return this.http.get<any>("http://localhost:3000/api/getbeers")
  }

  // Call in order to save beer to database
  saveToDatabaseVlad(id: number) {
    const idObject = {
      content: id
    }
    this.http.post<any>("http://localhost:3000/api/beers", idObject).subscribe( (data) => {
      console.log(data)
    })
  }

  // Search for beer/beers in API 
  searchBeer(search: string) {
    const searchObject = {
      content: search
    }
    console.log(searchObject)
    return this.http.post<any>("http://localhost:3000/api/getbeers", searchObject)
  }

  // Delete beer from database by Id
  deleteBeer(id: number) {
    this.http.delete<any>("http://localhost:3000/api/beers/" + id).subscribe( (data) => {
      console.log(data)
    })
  }

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


}
