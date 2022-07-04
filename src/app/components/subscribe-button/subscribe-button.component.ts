
import {FormsModule} from '@angular/forms';
import { Component, Input,Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from 'src/app/models';
import { DatabaseCheckComponent } from '../database-check/database-check.component';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-subscribe-button',
  templateUrl: './subscribe-button.component.html',
  styleUrls: ['./subscribe-button.component.scss']
})




export class SubscribeButtonComponent {
  public beers: any | undefined;


  constructor(
    private http: HttpClient
  ) {}

  @Output() enableSwitchChange = new EventEmitter<boolean>();
  @Input() enableSwitch: boolean = false;



  // This needs to check with database-check component whether the beer is already saved or not (by the id)
  // @Input() enableSwitch: Boolean = this.beer.some(x => x.id === this.beers);


  // Logic for connecting the visual change with database needs to be added
  update() {
    if (this.enableSwitch === true) {
      console.log("Beer saved")

    }
    else {
      console.log("beer unsaved")
    }
    this.enableSwitchChange.emit(this.enableSwitch);
  }

// This portion of code is not being used at the moment

//   ngOnInit(): void {
//   this.http.get<any>('http://localhost:3000/api/beers')
//   .subscribe((beerList: Array<Beer>) => {
//     this.beers = beerList;
//     console.log(this.beers)
//   })
// }

}
