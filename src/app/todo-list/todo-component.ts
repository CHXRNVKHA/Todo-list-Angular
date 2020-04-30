import { Component } from '@angular/core';
     
class Item{
    task: string;
    done: boolean;
    deadline: string;
     
    constructor(task: string, deadline: string) {
        this.task = task;
        this.deadline = deadline;
        this.done = false;
    }
}
 
@Component({
    selector: 'todo-list-app',
    templateUrl: './todo-list.html',
})

export class AppComponent { 
    task: string;
    deadline: string;
     
    items: Item[] = 
    [
        { task: 'taks1', done: false, deadline: '15:15' },
        { task: 'taks2', done: false, deadline: '20:30' },
        { task: 'taks3', done: true, deadline: '22:00' },
        { task: 'taks4', done: false, deadline: '10:45' }
    ];
    addItem(task: string, deadline: string): void {
         
        if(task == null || task.trim() == '' || deadline == '')
            return;
        this.items.push(new Item(task, deadline));
    }
}