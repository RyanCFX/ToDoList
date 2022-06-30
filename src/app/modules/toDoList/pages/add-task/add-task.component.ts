import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { v4 as uuid } from 'uuid';

import { TaskModel } from 'src/app/core/models/task.model';
import { GetTasksService } from '../../services/get-tasks.service';
import { TasksManagerService } from '../../services/tasks-manager.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  /** Store to do list */
  tasksList: TaskModel[] = [];

  /** Create and format the date */
  date: Date = new Date();
  getDate: string = `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`

  /** Show the button to update a note */
  showBtnUpdate: boolean = false;

  /** Data that will be sent to add and update */
  taskFormValues: TaskModel = {
    id: uuid(),
    title: '',
    description: '',
    creationDate: this.getDate,
    isImportant: false,
    isCompleted: false,
    date_MarkAsCompleted: '',
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getTasksService: GetTasksService,
    private tasksManagerService: TasksManagerService
  ) {}

  ngOnInit(): void {
    this.toUpdateNote();
  }

  goToMainPage() {
    this.router.navigate(['tasks']);
  }

  /** Evaluate if adding a note or modifying is required */
  toUpdateNote() {
    let id: string = '';
    this.activatedRoute.params.subscribe((params) => {
      id = params['id'];
    });
    if (id) {
      this.showBtnUpdate = true;

      this.tasksManagerService.loadTasks().subscribe((tasks) => {
        Object.entries(tasks).map((el) => this.tasksList.push(el[1]));

        this.tasksList.map((task) => {
          if (task.id == id) {
            this.taskFormValues = task;
          }
        });
      });
    }
  }

  changeImportance() {
    this.taskFormValues.isImportant = !this.taskFormValues.isImportant;
  }

  addTask() {
    this.tasksManagerService.postTask(this.taskFormValues);
    this.goToMainPage();
  }

  updateTask() {
    let tasksList: TaskModel[] = [];

    this.activatedRoute.params.subscribe((params) => {
      this.tasksList.map((task) => {
        if (task.id == params['id']) {
          task = this.taskFormValues;
        }
        tasksList.push(task);
      });
    });
    this.tasksManagerService.putTasks(tasksList);

    this.goToMainPage();
  }
}
