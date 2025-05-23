import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, 
    children: [
      {
        path: 'categorias',
        loadChildren:() => import('../brinquedos/brinquedos.module').then(m => m.BrinquedosModule),
        pathMatch: 'full',
        data: { titulo: 'Cadastro de Serviço', subTitulo: 'Realize o cadastro da atividade'}
      },
      {
        path: 'lugares',
        loadChildren:() => import('../lugares/lugares.module').then(m => m.LugaresModule),
        pathMatch: 'full',
        data: { titulo: 'Cadastrar Empresa', subTitulo: 'Realize o cadastro de novas empresas'}


      },{
      path: 'galeria',
      loadChildren:() => import('../galeria/galeria.module').then(m => m.GaleriaModule),
      pathMatch: 'full',
      data: { titulo: 'Empresas Cadastradas', subTitulo: 'Busque locais, recreação, brinquedos infláveis e muito mais para tornar seu evento especial!'}

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
