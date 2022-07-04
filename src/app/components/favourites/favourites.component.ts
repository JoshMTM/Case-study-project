import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Beer } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  public sort: string | undefined;
  public beers: Array<Beer> | undefined;
  public beers1: any | undefined;
  
  constructor(
    private  httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }
  



  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/api/beers')
    .subscribe(async (beerList) => {
      this.beers1 = beerList;

      // console.log(Object.keys(this.beers1))
      // console.log(this.beers1)
      // console.log(this.beers1.beers[0])

      // for (var key in this.beers1) {
      //   if (this.beers1.hasOwnProperty(key)) {
      //     console.log(key)
      //   }
    // }

    })
    
    // this.beers1 = [{image_url: "https://images.punkapi.com/v2/keg.png", name: "123"},
    // {image_url: "https://images.punkapi.com/v2/keg.png", name: "123"}
    // ]

  }



}
