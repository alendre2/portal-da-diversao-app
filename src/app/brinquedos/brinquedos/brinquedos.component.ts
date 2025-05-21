import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrinquedosService } from '../brinquedos.service';

@Component({
  selector: 'app-brinquedos',
  standalone: false,
  templateUrl: './brinquedos.component.html',
  styleUrl: './brinquedos.component.scss'
})
export class BrinquedosComponent {
  camposForm: FormGroup;

  constructor( private service: BrinquedosService ){
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required)
    })
  }

  salvar(){
    this.camposForm.markAllAsTouched();

    if(this.camposForm.valid){
      this.service.salvar(this.camposForm.value).subscribe({
        next: categoria =>{
        console.log('Salva com sucesso!', categoria)
        this.camposForm.reset();
        } ,
        error: erro => console.log('Ocorreu um erro: ', erro)

      });
    }
  }

  isCampoInvalido(nomeCampo: string ): boolean{
      const campo = this.camposForm.get(nomeCampo);
      return campo?.invalid && campo?.touched && campo?.errors?.['required']
  }


}
