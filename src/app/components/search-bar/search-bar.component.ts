import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchInput = ''
  Beers: any = []


  onSearch() {
    this.router.navigate(['/search', this.searchInput])
    this.httpService.passSearchQuery(this.searchInput)
  }
  
  constructor(private router: Router, private http: HttpClient, private httpService: HttpService, private route: ActivatedRoute) {}

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search])
  }

  onClick() {
    this.httpService.getBeerDatabase()
    .subscribe((beerList) => { })
  }

}
