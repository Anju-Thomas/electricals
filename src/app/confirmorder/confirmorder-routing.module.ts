import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmorderComponent } from './confirmorder.component';

const routes: Routes = [{ path: '', component: ConfirmorderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmorderRoutingModule { }
