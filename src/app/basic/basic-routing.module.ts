import { NgModule,OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginUserComponent} from './login-user/login-user.component';
import {BasicComponent} from '../basic/basic.component';
const routes: Routes = [
   {
       path:"",
       component:BasicComponent,
       children:[
       {
        path:"login",
        component:LoginUserComponent
       }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule  implements OnInit{
  ngOnInit() {
    console.log("Basic Module.........................");
  }
 }