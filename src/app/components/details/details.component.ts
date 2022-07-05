import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Beer } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public beers: Array<Beer> | undefined;

  beerRating = 0;
  beerId!: number;
  beer!: Beer;
  routeSub: Subscription = new Subscription;
  beerSub: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.httpService
    .getBeerList()
    .subscribe((beerList: any) => {
      this.beers = beerList.data;
      console.log(this.beers);
    })
  }
  
  // getBeerDetails(id: number): void {
  //   this.beerSub = this.httpService
  //   .getBeerDetails(id)
  //   .subscribe((beerResp: Beer) => {
  //     this.beer = beerResp;

  //     setTimeout(() => {
  //       this.beerRating = this.beer.rating;
  //     }, 1000);
  //   });
  // }


  getColor(value: number): string {
    if(value > 75) {
      return "#5ee432"
    } else if (value < 50) {
      return '#fffa50';
    } else if (value > 30) {
      return '#f7aa38'
    } else {
      return '#ef4655'
    }
  }


  ngOnDestroy(): void {
    if (this.beerSub) {
      this.beerSub.unsubscribe();
    }
  }
}
