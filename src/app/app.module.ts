import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { GamemapComponent } from './gamemap/gamemap.component';

const appRoutes: Routes = [
  { path: 'playmastermind', component: GamemapComponent },
  { path: 'showtable', component: DisplaytableComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GamemapComponent,
    DisplaytableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
