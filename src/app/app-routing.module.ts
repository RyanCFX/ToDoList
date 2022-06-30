import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './modules/toDoList/pages/add-task/add-task.component';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./modules/home/home.module").then(module => module.HomeModule)
  },
  {
    path: "tasks",
    loadChildren: () => import("./modules/toDoList/toDoList.module").then(module => module.ToDoListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
