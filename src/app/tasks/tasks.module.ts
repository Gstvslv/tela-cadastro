import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { RegistrarComponent } from './registrar/registrar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ListarComponent } from './listar/listar.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    RegistrarComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class TasksModule { }
