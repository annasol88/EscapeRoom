import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { Puzzle01Component } from './puzzles/puzzle01/puzzle01.component';
import { Puzzle02Component } from './puzzles/puzzle02/puzzle02.component';
import { Puzzle03Component } from './puzzles/puzzle03/puzzle03.component';
import { Puzzle04Component } from './puzzles/puzzle04/puzzle04.component';
import { Puzzle05Component } from './puzzles/puzzle05/puzzle05.component';
import { Puzzle06Component } from './puzzles/puzzle06/puzzle06.component';
import { MapComponent } from './components/map/map.component';
import { EndingComponent } from './components/ending/ending.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SqlSolutionComponent } from './puzzles/puzzle01/components/sql-solution/sql-solution.component';
import { FindTheSqlInjectionComponent } from './puzzles/puzzle01/components/find-the-sql-injection/find-the-sql-injection.component';
import { FindPhishingVulnerabilitiesComponent } from './puzzles/puzzle03/components/find-phishing-vulnerabilities/find-phishing-vulnerabilities.component';
import { XxsSolutionComponent } from './puzzles/puzzle03/components/xxs-solution/xxs-solution.component';
import { XxsInputValidationComponent } from './puzzles/puzzle03/components/xxs-input-validation/xxs-input-validation.component';
import { TerminalComponent } from './puzzles/puzzle02/components/terminal/terminal.component';
import { AnswerComponent } from './puzzles/puzzle02/components/answer/answer.component';
import { InteractiveTerminalComponent } from './puzzles/puzzle04/components/interactive-terminal/interactive-terminal.component';
import { CreateNewPasswordComponent } from './puzzles/puzzle05/components/create-new-password/create-new-password.component';
import { FindKeyspaceComponent} from './puzzles/puzzle05/components/find-keyspace/find-keyspace.component';
import { CalculatePasswordCrackerComponent} from './puzzles/puzzle05/components/calculate-password-cracker/calculate-password-cracker.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    MapComponent,
    LandingpageComponent,
    EndingComponent,
    Puzzle01Component,
    Puzzle02Component,
    Puzzle03Component,
    Puzzle04Component,
    Puzzle05Component,
    Puzzle06Component,
    FindTheSqlInjectionComponent,
    FindPhishingVulnerabilitiesComponent,
    SqlSolutionComponent,
    XxsSolutionComponent,
    XxsInputValidationComponent,
    TerminalComponent,
    AnswerComponent,
    InteractiveTerminalComponent,
    CreateNewPasswordComponent,
    FindKeyspaceComponent,
    CalculatePasswordCrackerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'terminal/:id', component: TerminalComponent},
      {path: 'puzzle01', component: Puzzle01Component},
      {path: 'puzzle02', component: Puzzle02Component},
      {path: 'puzzle03', component: Puzzle03Component},
      {path: 'puzzle04', component: Puzzle04Component},
      {path: 'puzzle05', component: Puzzle05Component},
      {path: 'puzzle06', component: Puzzle06Component},
      {path: 'towermap', component: MapComponent},
      {path: 'LandingPage', component: LandingpageComponent},
      {path: 'Ending', component: EndingComponent},
      {path: '', redirectTo: '/LandingPage', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent}
    ]),
    FormsModule,
    CountdownModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
