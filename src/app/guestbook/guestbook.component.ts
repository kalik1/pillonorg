import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import {Guestbook} from "../models/Guestbook";
import {GuestbookService} from "../services/guestbook.service";

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.scss']
})
export class GuestbookComponent implements OnInit {
  guestbookForm:FormGroup;
  formSubmitted = false;
  guestbooks: Guestbook[];

  constructor(
    private formBuilder:FormBuilder,
    private guestBookService : GuestbookService
  ) {
  }

  ngOnInit() {
    this.createGuestbookForm();
    this.guestBookService.getGuestbooks().subscribe(guestbooks =>this.guestbooks = guestbooks );
  }

  createGuestbookForm(){
    this.guestbookForm = this.formBuilder.group({
      author : ['', Validators.required ],
      title: ['', Validators.required ],
      authorEmail: '',
      content  : ['', Validators.required ]
    });
  }
  onFormSubmit() {
    let data = JSON.stringify(this.guestbookForm.value);
    console.log('-----Guestbook in JSON Format-----');
    console.log(data);
    let guestbook: Guestbook = this.guestbookForm.value;
    guestbook.date = new Date();
    this.guestBookService.newGuestbook(guestbook);
    this.formSubmitted = true;
    this.guestbookForm.reset();
  }


}
