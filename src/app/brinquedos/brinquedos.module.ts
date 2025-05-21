import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrinquedosRoutingModule } from './brinquedos-routing.module';
import { BrinquedosComponent } from './brinquedos/brinquedos.component';


@NgModule({
  declarations: [
    BrinquedosComponent
  ],
  imports: [
    CommonModule,
    BrinquedosRoutingModule
  ]
})
export class BrinquedosModule { }
