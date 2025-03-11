import { Component } from '@angular/core';

interface Tasks {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})

export class RegistrarComponent {
  tasks: Tasks[] = [
    {value: 'faculdade-0', viewValue: 'Faculdade'},
    {value: 'casa-1', viewValue: 'Casa'},
    {value: 'trabalho-2', viewValue: 'Trabalho'},
  ];

}
