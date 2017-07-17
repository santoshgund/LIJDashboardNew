import { Component, OnInit,Input } from '@angular/core';
import { Environment } from '../environemnt.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  environments: Environment[] = [
    new Environment(1, "TS3-1 IS3 PROD (Fujitsu)", "This is Prod Env", "1.15.15 / 28.06.2017 Srirang"),
    new Environment(2, "TS3-3 E2E-CAT (HSL)", "End to End HSL CAT", "1.15.15 / 23.06.2017 Santosh"),
    new Environment(3, "TS3-1/IS3 - TS3-2/IS4 CAT (HSL)", "HSL CAT", "1.15.15 / 23.06.2017 Santosh"),
    new Environment(4, "pre-SIT ENV1/test1", "PRE-SIT HSL", "1.15.13 / 17.05.2016 Santosh"),
    new Environment(5, "TS3&IS3 SIT ENV4/test4", "SIT HSL", "1.15.15 / 22.06.2017 Santosh"),
  ];
constructor(){}
  ngOnInit() {
  }

}
