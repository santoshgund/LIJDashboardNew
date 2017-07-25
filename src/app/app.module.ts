import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BranchesComponent } from './branches/branches.component';
import { EnvironmentComponent } from './dashboard/environment/environment.component';
import { ApplicationComponent } from './dashboard/application/application.component';
import { ToggleDirective } from './shared/toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftNavigationComponent,
    DashboardComponent,
    HeaderComponent,
    BranchesComponent,
    EnvironmentComponent,
    ApplicationComponent,
    ToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
