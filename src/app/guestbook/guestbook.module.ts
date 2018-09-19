import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestbookRoutingModule } from './guestbook-routing.module';
import { GuestbookComponent } from './guestbook.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";

@NgModule({
  imports: [
    CommonModule,
    GuestbookRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
    PerfectScrollbarModule,
    ReactiveFormsModule
  ],
  declarations: [GuestbookComponent]
})
export class GuestbookModule { }
