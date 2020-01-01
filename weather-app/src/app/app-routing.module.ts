import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather-forecast',
    pathMatch: 'full'
  },
  { path: 'favorites-list', component: FavoritesListComponent },
  { path: 'weather-forecast', component: WeatherForecastComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
