import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskModel } from 'src/app/core/models/task.model';
import config from '../config';

@Injectable({
  providedIn: 'root'
})
export class PutTasksService {

  constructor(private httpClient:HttpClient) { }

  putTasks(tasks:TaskModel[]){
    this.httpClient.put(config.DB_URI, tasks)
    .subscribe()
  }
}
