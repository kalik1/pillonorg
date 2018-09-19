import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GuestbookComponent} from "./guestbook.component";

const routes: Routes = [
  {path : 'guestbook', component: GuestbookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestbookRoutingModule { }
