import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-database-check',
  templateUrl: './database-check.component.html',
  styleUrls: ['./database-check.component.scss']
})
export class DatabaseCheckComponent implements OnInit {
  public beers: any | undefined;

  constructor(
    private http: HttpClient,
    private httpService: HttpService
  ) {}
  ngOnInit() {
    // this.httpService.getBeerDatabase()
    // .subscribe((beerList) => {
    //   this.beers = beerList.data;
    //   console.log(this.beers)
    //   return this.beers;
    // })
    this.http.get<any>('http://localhost:3000/api/beers')
    .subscribe((beerList) => {
      this.beers = beerList.data;
      console.log(this.beers)
      return this.beers;
    })
  }}
