import { Injectable } from '@angular/core';
import { TaskModel } from 'src/app/core/models/task.model';
import { GetTasksService } from './get-tasks.service';
import { PostTaskService } from './post-task.service';
import { PutTasksService } from './put-tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TasksManagerService {
  /** Store to do list */
  tasksList:TaskModel[]=[];
  
  constructor(
    private getTasksService:GetTasksService,
    private postTaskService:PostTaskService,
    private putTasksService:PutTasksService) {
     }

  loadTasks(){
    return this.getTasksService.getTasks();
  }

  getTasks(){
    let tasksList:TaskModel[]=[];
    this.getTasksService.getTasks()
    .subscribe((tasks)=>{
      this.tasksList = []
      if(tasks){
        Object.entries(tasks).map((el)=>this.tasksList.push(el[1])); 
        this.orderTasksByImportance(this.tasksList).forEach((el)=>{
          tasksList.push(el)
        })
      }
    })
    return tasksList
  }

  postTask(task:TaskModel){
    this.postTaskService.postTask(task).subscribe()
  }

  putTasks(tasks:TaskModel[]){
   this.putTasksService.putTasks(tasks)
  }

  markTaskAsComplete(id:string){
    let tasksList:any[]=[]
    this.tasksList.forEach((task)=>{
      if(task.id == id){
        task.isCompleted = !task.isCompleted
      }
      tasksList.push(task)
    })
    this.putTasksService.putTasks(tasksList)
  }

  orderTasksByImportance(tasks:TaskModel[]){
    let tasksList:any[]= []

    tasks.forEach((task)=>{
      if(task.isImportant){
        tasksList.push(task)
      }
    })
    tasks.forEach((task)=>{
      if(!task.isImportant){
        tasksList.push(task)
      }
    })
    return tasksList
  }

  updateTask(id:string){
    let tasksList:TaskModel[]= [];
    this.getTasksService.getTasks()
    .subscribe((tasks)=>{
      Object.entries(tasks).map((el)=>tasksList.push(el[1])); 
      tasksList = this.orderTasksByImportance(tasksList)
      
      tasksList.map((task)=>{
        if(task.id == id){
          task
        }
      })
      console.log(tasksList);
      this.putTasks(tasksList)
    })
    
  }

  
}
