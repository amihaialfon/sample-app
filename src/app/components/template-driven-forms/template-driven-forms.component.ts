import { Component, OnInit,ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {

  @ViewChild('f') form;

  constructor() { }
  public langs: Array<string> = [
    'English',
    'Hebrew',
    'French'
  ]
  
  ngOnInit(): void {
  }

  public onSubmitForm(): void{
    if(this.form.valid){
      console.log("Our Form: ",this.form)
    }
    else{
    console.log("Not Valid Form: ",this.form)
  }
  }

  printForm(){
    console.log(this.form)
  }

}
