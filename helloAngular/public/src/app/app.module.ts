import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { PuppyComponent } from './puppy/puppy/puppy.component';
import { PuppyListComponent } from './puppy/puppy-list/puppy-list.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { PuppyFormComponent } from './puppy/puppy-form/puppy-form.component' //ajax requrests prebuilt


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    PuppyComponent,
    PuppyListComponent,
    PuppyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
