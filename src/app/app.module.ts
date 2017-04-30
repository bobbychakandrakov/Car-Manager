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
import { CarItemComponent } from './car-item/car-item.component';

import { CarDataService } from './car-data.service';
import { CarEditComponent } from './car-edit/car-edit.component';
import { LimitToPipe } from './limit-to.pipe';
import { SkipItemsPipe } from './skip-items.pipe';


const appRoutes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'create', component: CarFormComponent },
  { path: 'car/:id', component: CarEditComponent}
    ];

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarFormComponent,
    CarItemComponent,
    CarEditComponent,
    LimitToPipe,
    SkipItemsPipe
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
  providers: [CarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
