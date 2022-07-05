import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  showResults : boolean = false
  noResults: boolean = false
  Beers: any = []
  public savedBeers: any | undefined;


  public constructor(private httpService: HttpService) { 
    this.httpService.searchUpdated.subscribe((value) => {
      console.log('subscribing: ', value);
      this.onSearch(value);
    })
    
    this.httpService
     .getBeerDatabase()
     .subscribe( (beers: any) => {
      this.savedBeers = beers.data
    })
  };


  ngOnInit(): void {

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

  public async onSearch(search: string) {
    this.httpService.searchBeer(search).subscribe( (responseData) => {
      console.log('Inside onSearch: ', responseData.data)
      if (JSON.stringify(responseData.data) !== JSON.stringify([])) {
        this.Beers = responseData.data
        this.noResults = false
        this.showResults = true
      }
      else {
        this.noResults = true
        this.showResults = false
      }
    })
  }
}
