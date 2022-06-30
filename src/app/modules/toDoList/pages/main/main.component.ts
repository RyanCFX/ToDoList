import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TaskModel } from 'src/app/core/models/task.model';
import { GetTasksService } from '../../services/get-tasks.service';
import { PostTaskService } from '../../services/post-task.service';
import { TasksManagerService } from '../../services/tasks-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  /** Store to do list */
  tasksList: TaskModel[] = [];

  /** Store to do list to display */
  tasksListToDisplay: any[] = [];

  /** task that is being extended and showing all its content */
  taskIdToExtend: string = '';
  isShowingMenu: boolean = false;

  constructor(
    private router: Router,
    private tasksManagerService: TasksManagerService
  ) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    /** load all notes */
    this.tasksList = this.tasksManagerService.getTasks();
    this.tasksListToDisplay = this.tasksList;
  }

  goToAddTaskPage() {
    this.router.navigate(['tasks/addtasks']);
  }

  goToUpdateTaskPage(id: string) {
    this.router.navigate([`tasks/addtasks/${id}`]);
  }

  showAllTasksPage() {
    this.tasksListToDisplay = this.tasksList;
  }

  showCompleteTasksPage() {
    this.tasksListToDisplay = this.tasksList.filter((task) => task.isCompleted);
  }

  showUncompleteTasksPage() {
    this.tasksListToDisplay = this.tasksList.filter(
      (task) => !task.isCompleted
    );
  }

  showNav() {
    this.isShowingMenu = !this.isShowingMenu;
  }

  extendTask(id: string) {
    if (this.taskIdToExtend != id) {
      this.taskIdToExtend = id;
    } else {
      this.taskIdToExtend = '';
    }
  }

  deleteTask(id: string) {
    this.tasksListToDisplay = this.tasksListToDisplay.filter(
      (task) => task.id != id
    );
    this.tasksManagerService.putTasks(this.tasksListToDisplay);
  }

  markTaskAsComplete(id: string) {
    this.tasksManagerService.markTaskAsComplete(id);
  }
}
