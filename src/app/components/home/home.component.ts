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

  constructor(
    private  httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   if (params['beer-search']) {
    //     this.searchBeers('metacrit', params['beer-search']);
    //   } else {
    //     this.searchBeers('metacrit');
    //   }
    // })

    this.httpService
    .getBeerList('metacrit')
    .subscribe((beerList: Array<Beer>) => {
      this.beers = beerList;
      console.log(this.beers);
    })
  }

  // searchBeers(sort: string, search?: string): void {
  //   this.httpService
  //   .getBeerList(sort, search)
  //   .subscribe((beerList: Array<Beer>) => {
  //     this.beers = beerList.results;
  //     console.log(beerList);
  //   })
  // }


}
