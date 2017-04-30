import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarFormComponent } from './car-form/car-form.component';


const appRoutes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'create', component: CarFormComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    LocalStorageModule.withConfig({
        prefix: 'app-root',
        storageType: 'localStorage'
    }),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
