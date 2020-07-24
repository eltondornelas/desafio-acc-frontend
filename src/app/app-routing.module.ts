import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { ItemFormComponent } from './item-form/item-form.component';

const routes: Routes = [
    { path: 'tarefas', component: TaskListComponent },
    { path: 'add_tarefa', component: TaskFormComponent },
    { path: 'add_item/:id', component: ItemFormComponent },
    { path: 'remove_item/:task_id/:item_id', component: ItemFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }