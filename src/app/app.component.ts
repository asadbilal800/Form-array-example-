import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      websites: new FormArray([this.generateFormArrayElement()]),
    });
  }

  ngOnInit(): void {
  }

  get formArray() {
    return this.form.get('websites') as FormArray;
  }

  generateFormArrayElement() {
    return new FormControl('');
  }

  changeWebsite(value: string,index:number){

    if(this.checkIfLastElement(index) && value){
      this.formArray.push(this.generateFormArrayElement())
      let secondlastElementId = 'website'+ (this.formArray.length -2)
      setTimeout(() => {
        document.getElementById(secondlastElementId).focus();
      },10)
    }
    else if(this.checkIfSecondLastElement(index) && !value) {
    this.formArray.removeAt(index + 1)
    }

    else if(!value) {
      this.formArray.removeAt(index)
    }

  }
  
  checkIfSecondLastElement(index: number) {
    return (this.formArray.length -2 === index) ? true : false 
  }

  checkIfLastElement(index:number){
    return (this.formArray.length -1 === index) ? true : false 
  }
}

