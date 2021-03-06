import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { Task } from '../model/task';
import { TaskItem } from '../model/task-item';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task: Task;
  taskItem: TaskItem;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService) {

    this.task = new Task();
    this.taskItem = new TaskItem();
  }

  onSubmit() {
    this.taskService.save(this.task).subscribe(result => this.gotoTaskList());
  }

  gotoTaskList() {
    this.router.navigate(['/tarefas']);
  }

  ngOnInit(): void {
  }

}
