import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [

 
  
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'details', component: DetailsComponent},
  {
    path: 'search',
    //path: 'search/:beer-search',
    component: SearchComponent,
  },
  {
    path: 'search/:beer-search',

    component: SearchComponent,
  },
  {
    path: 'favourites',
    component: FavouritesComponent
<<<<<<< HEAD
  },

 { 
  path: "details/:id",
  component: DetailsComponent
}
=======

  }

>>>>>>> 78218bf9d9b2e107a8004aa7cd5c5fa68a8685aa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
