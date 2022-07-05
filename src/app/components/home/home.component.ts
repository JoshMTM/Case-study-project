
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
  // public beers: any = []
  
  @Output() beerSelected = new EventEmitter<void>();
 
  public beers: Array<Beer> | undefined;
  public savedBeers: any = [];

  constructor(
    private router: Router,
    private  httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
   // this.httpService
   // .getBeerList2()
   // .subscribe( (beerList: any) => { 
   //  this.beers = beerList.data;
   //   console.log(this.beers);

    this.httpService
    .getBeerList('metacrit')
    .subscribe((beerList: Array<Beer>) => {
      this.beers = beerList;
      console.log(' THE BEERS', this.beers);
    })

    this.httpService.retrieveFromDatabase()
    .subscribe((beers: any) => {
        this.savedBeers = beers.beers;
        console.log(this.savedBeers)
      });
  }

  switchToggled(id: number,name: string, state: boolean) {
    if (state) {
    this.httpService.saveToDatabase(name);
    }
    console.log(`Switch toggled. ${id} = ${state}`)
  }

  
  goToPage(pageName:string):void{
    this.router.navigate([`/details`]);
  }
  
  // searchBeers(sort: string, search?: string): void {
  //   this.httpService
  //   .getBeerList(sort, search)
  //   .subscribe((beerList: Array<Beer>) => {
  //     this.beers = beerList.results;
  //     console.log(beerList);
  //   })
  // }

  isSaved(id: number) {
    // console.log('BEERS HERE', this.savedBeers)
    // const savedBeers = this.httpService.retrieveFromDatabase();
    // console.log(this.savedBeers);
    // if (!this.savedBeers) {
    //   throw new Error('No beers found!')
    // }



    return this.savedBeers.some((beer: Beer) => {
      // console.log('This is a beer', beer)



  onSelected(){
    this.beerSelected.emit();
      return beer.id === id
    });

  }
}

