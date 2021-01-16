import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
{path:'dashboard',component:DashboardComponent},
{path:'',component:DashboardComponent},
{path:'register',component:RegisterComponent},
{path:'productdisplay',component:ProductdisplayComponent},
{ path: 'productlist', loadChildren: () => import('./productlist/productlist.module').then(m => m.ProductlistModule) },
{path:'pricelist',component:PricelistComponent},
{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
{ path: 'confirmorder', loadChildren: () => import('./confirmorder/confirmorder.module').then(m => m.ConfirmorderModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
