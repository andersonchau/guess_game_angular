import { Component, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormGroup, FormControl,FormBuilder,Validators,ValidatorFn,AbstractControl } from '@angular/forms';





@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      password1: ['', [Validators.required,this.patternValidator()]],
      password2: ['', Validators.compose([Validators.required, this.patternValidator()])],
    });
    console.log('OK');
  }


  get getFormControls() {
    return this.myForm.controls;
  }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return null;
      }

      //const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      //const valid = regex.test(control.value);
      const valid = control.value.length >= 8;
      return valid ? null : { invalidPassword: true };
    };
  }

  ngOnInit(): void {
   console.log('hihi');
    
    
    /*
    this.myForm = new FormGroup({
      name: new FormControl('Benedict'),
      email: new FormControl(''),
      message: new FormControl('')
    });
    */
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
/*
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group

    const password = group.get('password1').value;
    const confirmPassword = group.get('password2').value;

    return password === confirmPassword ? null : { notSame: true }     
  }
*/

  
}
