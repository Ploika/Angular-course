import { Component, Input, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
  user = {login: '', password: ''}
  constructor() { }

  ngOnInit(): void {
  }
  submit(myForm: NgForm): void{
    console.log(myForm);
  }

}
