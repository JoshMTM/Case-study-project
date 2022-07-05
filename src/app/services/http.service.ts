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
  Beers: any = []
  searchUpdated: BehaviorSubject<string>
  idUpdated: BehaviorSubject<number>

  static getBeerList: any;


  constructor(private http: HttpClient) { 
    this.searchUpdated = new BehaviorSubject('')
    this.idUpdated = new BehaviorSubject(0)
  }

  passSearchQuery(search: string) {
    this.searchUpdated.next(search)
  }

  passID(id: number) {
    this.idUpdated.next(id)
  }


  

  // retrieve beer by ID
  getBeerById(id: number) {
      return this.http.get<any>("http://localhost:3000/api/beers/" + id)
  }


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


}
