import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from 'src/app/core/models/task.model';
import config from '../config';

@Injectable({
  providedIn: 'root'
})
export class GetTasksService {

  constructor(private httpClient:HttpClient) { }

  getTasks(){
    return this.httpClient.get(config.DB_URI)
  }

  // orderTasks(){
  //   let tasksList:TaskModel[]=[]
  //   this.httpClient.get(config.DB_URI)
  //   .subscribe((tasks)=>{
  //     Object.entries(tasks).map((el)=>tasksList.push(el[1])); 
  //   })
  //   return tasksList
  // }

  // dbResToArray(object:object){
  //   let newArray:TaskModel[]=[]
  //   Object.entries(object).map((el)=>newArray.push(el[1]))
  //   return newArray
  // }
}


