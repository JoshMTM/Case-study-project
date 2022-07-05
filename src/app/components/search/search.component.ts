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


  public constructor(private httpService: HttpService) { 
    this.httpService.searchUpdated.subscribe((value) => {
      console.log('subscribing: ', value);
      this.onSearch(value);
    })
  };


  ngOnInit(): void {
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
