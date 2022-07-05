import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  public beers: any | undefined;
  
  constructor(
    private  httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) { 
    this.httpService.getBeerDatabase()
    .subscribe( async (beerList) => {
      this.beers = beerList.data
      console.log(this.beers)
    })
  }
  

  ngOnInit(): void {
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

  isSaved(id: number) {
    return true;
  }

  goToPage(pageName:string, id: number):void{
    this.httpService.passID(id)
    this.router.navigate([`/details`]);
  }


}
