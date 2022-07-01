import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from 'src/app/models';

@Component({
  selector: 'app-subscribe-button',
  templateUrl: './subscribe-button.component.html',
  styleUrls: ['./subscribe-button.component.scss']
})




export class SubscribeButtonComponent {
  // public beers: Array<Beer> | undefined;


  // constructor(
  //   private http: HttpClient
  // ) {}

  @Output() enableSwitchChange = new EventEmitter<boolean>();
  @Input() enableSwitch: Boolean = false;

  update() {
    this.enableSwitchChange.emit(Boolean(this.enableSwitch.toString()));
  }
//   ngOnInit(): void {
//   this.http.get<any>('http://localhost:3000/api/beers')
//   .subscribe((beerList: Array<Beer>) => {
//     this.beers = beerList;
//     console.log(this.beers)
//   })
// }

}
