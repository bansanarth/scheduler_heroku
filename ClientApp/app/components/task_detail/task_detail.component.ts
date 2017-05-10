import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dynoSizes, frequencies } from './data_model';

@Component({
    selector: 'task_detail',
    templateUrl: './task_detail.component.html'
})


export class TaskDetailComponent {

    taskForm: FormGroup;
    dynoSizes = dynoSizes;
    frequencies = frequencies;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.taskForm = this.fb.group({ 
            name: ['', Validators.required],
            properties: this.fb.group({ 
                dynoSize: '',
                frequency: '',
                lastRun: '',
                nextDue: ''
            }),
            
        });
    }





}