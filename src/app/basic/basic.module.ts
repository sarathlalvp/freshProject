import { NgModule,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
import{ BasicRoutingModule } from './basic-routing.module';
import {BasicComponent} from './basic.component'
import { MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    LoginUserComponent,
    BasicComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule

    
  ]
})
export class BasicModule  implements OnInit{
  ngOnInit() {
    console.log("BasicModule.........................");
  }
 }
