import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreatAnalysisComponent } from './threat-analysis/threat-analysis.component';
import { VulnerabilitiesComponent } from './vulnerabilities/vulnerabilities.component';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';
import { InageUnoComponent } from './inage-uno/inage-uno.component';

const routes: Routes = [
  { path: 'threat-analysis', component: ThreatAnalysisComponent },
  { path: 'vulnerabilities', component: VulnerabilitiesComponent },
  { path: 'cheatsheets', component: CheatsheetsComponent },
  { path: 'inage-uno', component: InageUnoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
