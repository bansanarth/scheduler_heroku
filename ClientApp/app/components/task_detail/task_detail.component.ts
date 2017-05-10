import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'task_detail',
    templateUrl: './task_detail.component.html'
})
export class TaskDetailComponent1 {
    name = new FormControl();
}

export class TaskDetailComponent2 {
    taskForm = new FormGroup({
        name: new FormControl()
    });
}