import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TakeQuizComponent} from './take-quiz/take-quiz.component';
import {CreateQuizComponent} from './create-quiz/create-quiz.component';

const routes: Routes = [
  {path: 'createQuiz', component: CreateQuizComponent},
  {path: 'takeQuiz', component: TakeQuizComponent},
  { path: '', redirectTo: 'createQuiz', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
