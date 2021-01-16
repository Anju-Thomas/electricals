import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { PopupcartComponent } from './popupcart/popupcart.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
subtotal:string

  title = 'electricals';
 
  constructor(public dialog: MatDialog,private _http: HttpClient){
  }
  ngOnInit(): void {
    this._http.get<any>('http://localhost:3000/cart').subscribe(s => {

      console.log(s)
   console.log(s.data.subTotal)
   this.subtotal=s.data.subTotal
    })
  }
  OpenDialog(): void {
    const dialogRef = this.dialog.open(MyaccountComponent, {
       width: '300px'
       
    });
}
CartDialog(): void {
  const dialogRef = this.dialog.open(PopupcartComponent, {
     width: '400px'
     
  });
}
}
