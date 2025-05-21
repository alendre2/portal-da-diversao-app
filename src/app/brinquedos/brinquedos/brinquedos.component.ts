import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-brinquedos',
  standalone: false,
  templateUrl: './brinquedos.component.html',
  styleUrl: './brinquedos.component.scss'
})
export class BrinquedosComponent {
  camposForm: FormGroup;

  constructor(){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  salvar(){
    console.log('Valores digitados', this.camposForm.value)
     console.log('Está valido ?', this.camposForm.valid)
  }


}
