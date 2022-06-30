import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  date: Date = new Date();
  getDate: string = `${this.date.getDate()}/${this.date.getMonth() + 1}/${this.date.getFullYear()}`

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToTasksPage() {
    this.router.navigate(['tasks']);
  }
}
