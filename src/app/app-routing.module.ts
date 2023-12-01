import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ResultsTeamComponent } from './components/results-team/results-team.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`,
  { path: 'home',component: HeaderComponent},
  { path: 'home/:country',component: HeaderComponent},

  {path: 'results-team/:country/:idLeague/:idTeam', component: ResultsTeamComponent},
/*   {path:'teams/:country/:idLeague', component: TableTeamsComponent},
  {path: 'results-team/:country/:idLeague/:idTeam', component: TeamsResultsComponent}, */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
