import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from 'src/app/models';

@Component({
  selector: 'app-database-check',
  templateUrl: './database-check.component.html',
  styleUrls: ['./database-check.component.scss']
})
export class DatabaseCheckComponent implements OnInit {
  public beers: any | undefined;

  constructor(
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/api/beers')
    .subscribe((beerList) => {
      this.beers = beerList;
      console.log(this.beers)
      return this.beers;
    })
  }}
