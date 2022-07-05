import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Beer } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service'; 
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string | undefined;
  public beers: any = []

  @Output() beerSelected = new EventEmitter<void>();
 
  //public beers: Array<Beer> | undefined;
  public savedBeers: any = [];

  constructor(
    private router: Router,
    private  httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   this.httpService
   .getBeerList()
   .subscribe( (beerList: any) => { 
    this.beers = beerList.data;
     console.log(this.beers);
   })

   this.httpService
   .getBeerDatabase()
   .subscribe( (beers: any) => {
    this.savedBeers = beers.data
   })
  }

  switchToggled(id: number,name: string, state: boolean) {
    if (state) {
    this.httpService.saveToDatabaseVlad(id);
    }
    else {
      this.httpService.deleteBeer(id)
    }
    console.log(`Switch toggled. ${id} = ${state}`)

  }

  
  goToPage(pageName:string):void{
    this.router.navigate([`/details`]);
  }

  isSaved(id: number) {
    return this.savedBeers.some((beer: Beer) => {
      return beer.id === id
    })

  }

  openBeerDetails(id: string): void {
    this.router.navigate(['details', id]);
  }
}