import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './todo-list/todo-list-component';
import { AppComponent as todoItem } from './todo-list/todo-component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, todoItem ],
    bootstrap:    [ AppComponent, todoItem ],
})
export class AppModule { }