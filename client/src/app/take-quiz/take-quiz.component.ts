import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Model} from '../model/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  data: Model[] = [];
  customRadio = false;
  public isCollapsed = true;
  constructor(private http: HttpClient, private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.quizAll();
  }

  // tslint:disable-next-line:typedef
  quizAll() {
    this.http.get<any>('https://node-quiz1.herokuapp.com/quizzes/').subscribe(response => {
      console.log(response);
      this.data = response;

    });


  }}
