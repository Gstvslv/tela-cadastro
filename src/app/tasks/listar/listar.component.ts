import { Component } from '@angular/core';

interface Tasks {
  title: String;
  description: String;
}

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  tasks: Tasks[] = [
    { title: "Tela Cadastro Angular", description: "Fazer a funcionalidade dos botões de navegação"},
    { title: "Sistema Bancario", description: "Fazer projeto do sistema bancario com servlets"}
  ]

}
