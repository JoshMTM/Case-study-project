import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchInput = ''

  onSearch() {
    let searchResult = {
      content: this.searchInput
    }
    console.log(searchResult)
    this.httpService.saveToDatabase(this.searchInput)
  }

  
  
  constructor(private router: Router, private http: HttpClient, private httpService: HttpService) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/api/beers')
    .subscribe((data) => {
      console.log(data)
    })
  }
  
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search])
  }

}
