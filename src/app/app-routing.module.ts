import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home',  loadChildren: './home/home.module#HomeModule' },
  { path: 'blog',  loadChildren: './blog/blog.module#BlogModule' },
  { path: 'guestbook',  loadChildren: './guestbook/guestbook.module#GuestbookModule' },
  { path: '**',  redirectTo: 'home' },
  //{ path: '**',  loadChildren: './home/home.module#HomeModule' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})

export class AppRoutingModule { }


