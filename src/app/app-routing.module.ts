import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


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
  },

 { 
  path: "details/:id",
  component: DetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
