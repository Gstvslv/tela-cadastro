import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './registrar/registrar.component';
import { ListarComponent } from './listar/listar.component';

const routes: Routes = [
  {path: 'registrar', component: RegistrarComponent},
  {path: 'listar', component: ListarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
