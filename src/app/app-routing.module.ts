import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

const routes: Routes = [
  { path: '', component: AllTasksComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'edit/:id', component: EditTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
