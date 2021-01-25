import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { DisplaytableComponent } from './displaytable/displaytable.component';
import { GamemapComponent } from './gamemap/gamemap.component';
import { TodoComponent } from './todo/todo.component';
import { ColorselectorComponent } from './colorselector/colorselector.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';

import { ReactiveFormsModule } from '@angular/forms';
const appRoutes: Routes = [
  { path: 'playmastermind', component: GamemapComponent },
  { path: 'showtable', component: DisplaytableComponent },
  { path: 'app-todo', component: TodoComponent },
  { path: 'app-todo-reactive-form', component: TodoReactiveFormComponent }  
  
];

@NgModule({
  declarations: [
    AppComponent,
    GamemapComponent,
    DisplaytableComponent,
    TodoComponent,
    ColorselectorComponent,
    TodoReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
