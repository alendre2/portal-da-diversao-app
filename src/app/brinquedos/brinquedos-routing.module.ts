import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrinquedosComponent } from './brinquedos/brinquedos.component';

const routes: Routes = [
  {
    path: '', component: BrinquedosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrinquedosRoutingModule { }
