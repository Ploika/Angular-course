import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  // inputs objects
  loginControl = new FormControl('def login', [Validators.minLength(2), Validators.required, this.customValidator])

  // object forms
  myFormGroup: FormGroup = new FormGroup({
    login: this.loginControl,
    password: new FormControl('def pass')
  })
  constructor() { }

  ngOnInit(): void {
  }
  save(): void{
    console.log(this.myFormGroup);

  }
  customValidator(control: AbstractControl){
    console.log(control);
    if(control.value.includes('fuck')){
      return {fuckPreset: true}
    }
    return null
  }
}
