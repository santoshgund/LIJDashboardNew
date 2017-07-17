import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    isNavBarExpanded=true;
    loadedFeature='dashboard';

  //Subscribe event to get the Toggle Class values
  toggleNavBarClass(event:boolean){
     this.isNavBarExpanded=event;
  }

  toggleNavigationItems(event:string){
    this.loadedFeature=event;
  }
}
