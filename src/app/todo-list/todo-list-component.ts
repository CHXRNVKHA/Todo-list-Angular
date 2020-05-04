import { Component } from '@angular/core';
import { ListService } from './todo-list-service';
import { AppComponent as Item } from './todo-component';

 
@Component({
    selector: 'todo-list-app',
    templateUrl: './todo-list.html',
    providers: [ListService],
})

export class AppComponent { 
    task: string;
    deadline: string;
    items: Item[] = [];

    constructor(private listService: ListService) {}
    
    addItem(task: string, deadline: string) {
        this.listService.addItem(task, deadline);
    }
}