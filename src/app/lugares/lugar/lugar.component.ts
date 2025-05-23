import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Brinquedos } from '../../brinquedos/brinquedos';
import { BrinquedosService } from '../../brinquedos/brinquedos.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss'
})
export class LugarComponent implements OnInit {

  camposForm : FormGroup;
  categorias: Brinquedos[]=[]

  constructor(
    private categoriaService: BrinquedosService,
    private service: LugarService
  ){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required)

    })
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => this.categorias = listaCategorias
    })
  }

 salvar() {

  this.camposForm.markAllAsTouched();

  if(this.camposForm.valid){
    this.service.salvar(this.camposForm.value)
    .subscribe({
      next: (lugar) => {
        console.log('Cadastrado com sucesso!', lugar);
        this.camposForm.reset();
      },
      error: erro => console.log('Ocorreu um erro: ', erro)
    });
  }
 }
isCampoInvalido(nomeCampo: string ): boolean{
      const campo = this.camposForm.get(nomeCampo);
      return campo?.invalid && campo?.touched && campo?.errors?.['required']
  }

}
