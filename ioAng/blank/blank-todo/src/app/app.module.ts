import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import {HeroesComponent} from './heroes/heroes.component'
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import {HeroSearchComponent} from './hero-search/hero-search.component'
@NgModule({
  declarations: [AppComponent,HeroesComponent,HeroDetailComponent,MessagesComponent,DashboardComponent,HeroSearchComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,HttpClientInMemoryWebApiModule,HttpClientModule,// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
