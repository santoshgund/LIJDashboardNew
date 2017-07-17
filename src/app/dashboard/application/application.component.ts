import { Component, OnInit } from '@angular/core';
import { Application } from '../../models/application.model';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
applications: Application[] = [
    new Application(1, "Sales Backend", "4.4.1/41.6.1", "7.7.2017"),
    new Application(2, "Service Point", "4.4.1/40.2.4", "7.7.2017"),
    new Application(3, "CRM", "4.4.1/41.0.1", "7.7.2017"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
