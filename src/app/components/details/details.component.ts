
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Beer } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service'; 


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  public beers: Array<Beer> | undefined;

  beerName: string='params.name';
  beerDescription: string='params.description';
  beerTagline: string='params.tagline';
  beer_first_brewed: string='params.first_brewed';

  

  constructor(private httpService: HttpService,
              private router:Router) { }

  ngOnInit(): void {
    this.httpService
    .getBeerList()
    .subscribe((beerList: any) => {
      this.beers = beerList.data;
      console.log(this.beers);
    })
  }
  }

  





