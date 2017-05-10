/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { TaskDetailComponent1 } from './task_detail.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

let fixture: ComponentFixture<TaskDetailComponent1>;

describe('Task_detail component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [TaskDetailComponent1] });
        fixture = TestBed.createComponent(TaskDetailComponent1);
        fixture.detectChanges();
    });

    

    
});
