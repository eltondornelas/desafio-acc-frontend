import { TaskFormComponent } from './../task-form/task-form.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';
import { TaskItem } from './../model/task-item';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  item: TaskItem;
  id: string;
  task_id: string;
  item_id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService) {

    this.item = new TaskItem();
    this.id = this.route.params['value']['id'];

    if (this.route.params['value']['task_id'] && this.route.params['value']['item_id']) {
      this.task_id = this.route.params['value']['task_id'];
      this.item_id = this.route.params['value']['item_id'];
      this.deleteItem();
    }
    //console.log(this.route.params['value']['id']);
    //this.route.params.subscribe(params => console.log(params));

  }

  onSubmitItem() {
    //console.log(this.item);
    //console.log(this.id);
    this.taskService.saveItem(this.id, this.item).subscribe(result => this.gotoTaskList());
  }

  deleteItem() {
    this.taskService.deleteItem(this.task_id, this.item_id).subscribe(result => this.gotoTaskList());
  }

  gotoTaskList() {
    this.router.navigate(['/tarefas']);
  }

  ngOnInit(): void {
  }

}
