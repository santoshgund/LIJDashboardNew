import { Component, OnInit,Input } from '@angular/core';
// import { Application } from '../models/application.model';
import { Environment } from '../models/environemnt.model';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService]
})
export class DashboardComponent implements OnInit {
    applications:{id:number,appName:string, appVersion:string,installedOn:string, environmentName:string}[]=[];
    environments:{id:number,envName:string,envDesc:string,installedOn:string}[]=[];

  constructor (private dashboardService:DashboardService){}
  
  ngOnInit() {
    this.applications=this.dashboardService.applications;
    this.environments=this.dashboardService.environments;
  }

  setClickedRow(row){
    console.log(row);
    this.applications=this.dashboardService.getAllApplications();
    
    this.applications = this.applications.filter (
          applications => applications.environmentName=== row.envName);
  }


}
