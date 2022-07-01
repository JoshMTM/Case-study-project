
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
  // beers!: Beer[];

  public beers: Array<Beer> | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  

    this.httpService.getBeerList('metacrit').subscribe((beerList: Array<Beer>) => {
        this.beers = beerList;
        console.log(this.beers);
})

  }

}



