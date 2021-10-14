import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  info = new FormGroup({
    fName : new FormControl("", [Validators.required, Validators.minLength(2)]),
    lName : new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    msg: new FormControl("", Validators.required)
  });

  constructor() { }
  formSubmit(){
    if (this.info.valid){
     console.log(this.info.value)
    }
   

  }
  ngOnInit(): void {
  }

}
