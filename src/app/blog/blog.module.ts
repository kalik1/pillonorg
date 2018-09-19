import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatFormFieldModule
  ],
  declarations: [BlogComponent]
})

export class BlogModule { }
