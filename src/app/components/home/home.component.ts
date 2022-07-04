import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Beer } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string | undefined;
  public beers: Array<Beer> | undefined;
  public savedBeers: any = [];

  constructor(
    private  httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {

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
    this.httpService.saveToDatabase(name);
    console.log(`Switch toggled. ${id} = ${state}`)
  }

  isSaved(id: number) {
    console.log('BEERS HERE', this.savedBeers)
    // const savedBeers = this.httpService.retrieveFromDatabase();
    // console.log(this.savedBeers);
    if (!this.savedBeers) {
      throw new Error('No beers found!')
    }

    return this.savedBeers.some((beer: Beer) => {
      console.log('This is a beer', beer)

      return beer.id === id
    });
  }
}

