import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PollsComponent } from './polls/polls.component';
import { CreatePollComponent } from './create-poll/create-poll.component';


const routes: Routes = [

  { 
    path: '', 
    redirectTo: '/login', 
    pathMatch: 'full' 
  },

  {
    path: 'login', 
    component: LoginComponent
  },

  {
    path: 'polls', 
    component: PollsComponent
  },

  {
    path: 'create-poll', 
    component: CreatePollComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
