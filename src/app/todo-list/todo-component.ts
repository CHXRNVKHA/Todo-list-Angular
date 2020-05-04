import { Component } from '@angular/core';

@Component({
    selector: 'todo-item-app',
    templateUrl: './todo-list.html',
})

export class AppComponent{
    task: string;
    done: boolean;
    deadline: string;

    constructor(task: string, deadline: string) {
        this.task = task;
        this.deadline = deadline;
        this.done = false;
    }
}