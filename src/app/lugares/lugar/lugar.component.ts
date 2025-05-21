import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Brinquedos } from '../../brinquedos/brinquedos';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent {

  camposForm : FormGroup;
  categorias: Brinquedos[]=[]

  constructor(){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliaca: new FormControl('', Validators.required)

    })
  }

  salvar(){
    console.log('Valores', this.camposForm.value)
  }
}
