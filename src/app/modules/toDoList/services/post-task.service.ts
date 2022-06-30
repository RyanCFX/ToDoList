import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import config from '../config';
import { TaskModel } from 'src/app/core/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class PostTaskService {
  constructor(private httpClient:HttpClient) { }

  postTask(tasks:TaskModel){
    return this.httpClient.post(config.DB_URI, tasks)
  }
}
