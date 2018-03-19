import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

import { DataService } from './services/data.service';
import { ConfigService } from './services/config/config.service';
import { EqualValidator } from './equal-validator.directive';

const appRoutes: Routes = [
  {path: '', component: TopNavigationComponent},
  {path: 'admin', component: AdminPanelComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    CustomModalComponent,
    AdminPanelComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
