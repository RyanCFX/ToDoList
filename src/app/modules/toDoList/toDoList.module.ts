import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToDoListRoutingModule } from './toDoList-routing.module';
import { MainComponent } from './pages/main/main.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    AddTaskComponent,
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    FormsModule
  ]
})
export class ToDoListModule { }