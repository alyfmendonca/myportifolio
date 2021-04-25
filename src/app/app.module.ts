import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { BannerComponent } from './partials/banner/banner.component';
import { AboutMeComponent } from './partials/about-me/about-me.component';
import { ExperienceComponent } from './partials/experience/experience.component';
import { TabsComponent } from './partials/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    AboutMeComponent,
    ExperienceComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
