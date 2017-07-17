import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  templateUrl: './left-navigation.component.html',
  styleUrls: ['./left-navigation.component.css'],
})
export class LeftNavigationComponent implements OnInit {
  showNavigation=false;
  @Output() activateNavBar =new EventEmitter<boolean>();
  @Output() featureSelected=new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

  //Used to Expand/Collaps Navigation Bar
  onToggleNavigation(){
    this.showNavigation=!this.showNavigation
    this.activateNavBar.emit(!this.showNavigation);
  }

  onSelectLeftNavigation(feature: string) {
        this.featureSelected.emit(feature)
    }

}
