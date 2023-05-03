import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThreatAnalysisComponent } from './threat-analysis/threat-analysis.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { VulnerabilitiesComponent } from './vulnerabilities/vulnerabilities.component';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';
import { InageUnoComponent } from './inage-uno/inage-uno.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreatAnalysisComponent,
    VulnerabilitiesComponent,
    CheatsheetsComponent,
    InageUnoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
