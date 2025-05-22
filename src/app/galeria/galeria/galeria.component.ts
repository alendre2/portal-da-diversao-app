import { Component,OnInit } from '@angular/core';
import { Brinquedos } from '../../brinquedos/brinquedos';
import { Lugar } from '../../lugares/lugar';
import { LugarService } from '../../lugares/lugar.service';
import { BrinquedosService } from '../../brinquedos/brinquedos.service';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent implements OnInit {

  lugares: Lugar[]= [];
  categoriasFiltro: Brinquedos[]= [];
  nomeFiltro: string = '';
  categoriaFiltro: string = '';

  constructor(
    private lugarService: LugarService,
    private categoriaService: BrinquedosService
  ){}


  ngOnInit(): void {
    this.categoriaService.obterTodas()
    .subscribe(categorias =>this.categoriasFiltro = categorias );

    this.lugarService.obterTodos()
    .subscribe(lugaresResposta => this.lugares = lugaresResposta);

  }

  getToltalEstrelas(lugar : Lugar ) : string{
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734'.repeat(5- (lugar.avaliacao || 0));
  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
    .subscribe(resultado => this.lugares = resultado);
  }

}
