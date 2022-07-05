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
  show: boolean = false

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
}
