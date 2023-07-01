import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'portfolio', component:PortfolioComponent},
  { path: '**', redirectTo: '' } // Handle undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
