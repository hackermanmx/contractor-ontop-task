import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContractorListComponent } from './pages/contractor-list/contractor-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ContractorListComponent],
  imports: [BrowserAnimationsModule, BrowserModule, AppRoutingModule, SharedModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
