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
export class DetailsComponent implements OnInit {

  beerRating = 0;
  beerId: number = 0;
  beer: any = [];
  show: boolean = false;
  public savedBeers: any | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.httpService.idUpdated.subscribe( (value) => {
      this.beerId = value
      this.httpService.getBeerById(value).subscribe( (data) => {
        this.beer = data.data
        this.show = true
        console.log(this.beer[0].food_pairing)
      })
    })
    this.httpService
     .getBeerDatabase()
     .subscribe( (beers: any) => {
      this.savedBeers = beers.data
    })
  }

  ngOnInit(): void {
  }


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
  switchToggled(id: number, name: string, state: boolean) {
    if (state) {
    this.httpService.saveToDatabaseVlad(id);
    }
    else {
      this.httpService.deleteBeer(id)
    }
    console.log(`Switch toggled. ${id} = ${state}`)

  }

  isSaved(id: number) {
    return this.savedBeers.some((beer: any) => {
      return beer.id === id
    })
}
}
