import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchInput = ''
  searchResult = ''

  onSearch() {
    const searchResult = {
      content: this.searchInput
    }
    console.log(searchResult)
    this.http.post<{message: string}>("http://localhost:3000/api/beers", searchResult).subscribe((responseData) => {
      console.log(responseData.message)
    })
    // this.http.get('http://localhost:3000/api/beers')
    // .subscribe((beerData) => {})
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
