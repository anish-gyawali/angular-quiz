import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {
  customRadio = false;
  customChecked1 = false;
  customChecked2 = false;
  customChecked3 = false;
  customChecked4 = false;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],

      Question1: ['', Validators.required],
      customRadio: [''],

      Question2: ['', Validators.required],
      Q2option1: [''],
      Q2option2: [''],
      Q2option3: [''],
      Q2option4: [''],

      Question3: ['', Validators.required],
      Q3option1: [''],
      Q3optionA: [''],
      Q3option2: [''],
      Q3optionB: [''],
      Q3option3: [''],
      Q3optionC: [''],
      Q3option4: [''],
      Q3optionD: [''],

      Question4: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  submitForm() {
    const formData = {
      title: this.form.controls.title.value,
      description: this.form.controls.description.value,

      Question1: this.form.controls.Question1.value,
      customRadio: this.form.controls.customRadio.value,

      Question2: this.form.controls.Question2.value,
      Q2option1: this.form.controls.Q2option1.value,
      Q2option2: this.form.controls.Q2option2.value,
      Q2option3: this.form.controls.Q2option3.value,
      Q2option4: this.form.controls.Q2option4.value,

      Question3: this.form.controls.Question3.value,
      Q3option1: this.form.controls.Q3option1.value,
      Q3optionA: this.form.controls.Q3optionA.value,
      Q3option2: this.form.controls.Q3option2.value,
      Q3optionB: this.form.controls.Q3optionB.value,
      Q3option3: this.form.controls.Q3option3.value,
      Q3optionC: this.form.controls.Q3optionC.value,
      Q3option4: this.form.controls.Q3option4.value,
      Q3optionD: this.form.controls.Q3optionD.value,

      Question4: this.form.controls.Question4.value
    };

    this.http.post('https://node-quiz1.herokuapp.com/new/', formData).subscribe();
    this.form.reset();
  }
}
