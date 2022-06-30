import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sort: string | undefined;
  @Output() beerSelected = new EventEmitter<void>();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  


  onSelected(){
    this.beerSelected.emit();
  }
}
