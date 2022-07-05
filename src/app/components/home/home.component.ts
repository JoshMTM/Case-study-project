import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  public savedBeers: Array<any> | undefined;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.httpService
    .getBeerList('released')
    .subscribe((beerList: Array<Beer>) => {
      this.beers = beerList;
      console.log(this.beers);
    })
  }

  switchToggled(id: number, state: boolean) {
    console.log(`Switch toggled. ${id} = ${state}`)
  }

  isSaved(id: number) {
    // const savedBeers = this.httpService.retrieveFromDatabase();
    // console.log(this.savedBeers);
    return false;
    // return savedBeers.some(x => x.id === id);
  }

  openBeerDetails(id: number): void {
    this.router.navigate(['details', id])
  }
}
