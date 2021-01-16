import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmorderRoutingModule } from './confirmorder-routing.module';
import { ConfirmorderComponent } from './confirmorder.component';


@NgModule({
  declarations: [ConfirmorderComponent],
  imports: [
    CommonModule,
    ConfirmorderRoutingModule
  ]
})
export class ConfirmorderModule { }
