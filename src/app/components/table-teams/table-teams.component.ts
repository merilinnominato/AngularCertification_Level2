import { Component, Input, OnInit, Output } from '@angular/core';
import { Standings } from '../interfaces/standings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-teams',
  templateUrl: './table-teams.component.html',
  styleUrls: ['./table-teams.component.css']
})
export class TableTeamsComponent implements OnInit {
 
  @Input()
  arrayOfStandings!: Standings[];

  @Input()
  country:any;

  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(country:any, item:any){
    this.router.navigate(['/results-team', country.country, country.id , item.team.id])
  }


}
