import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './edit-task/edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTasksComponent,
    AddTaskComponent,
    EditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
