import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-popupcart',
  templateUrl: './popupcart.component.html',
  styleUrls: ['./popupcart.component.css']
})
export class PopupcartComponent implements OnInit {
  cartlist: Array<{ _id: string, productId: Array<{ _id: string, name: string, price: string }>, quantity: string, total: string, price: string }> = []
  subtotal: any
  constructor(private _http: HttpClient,public dialog: MatDialog) { }

  

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Token " + sessionStorage.getItem("token")
      })
    }
    this._http.get<any>('http://localhost:3000/cart', httpOptions).subscribe(s => {

      console.log(s)
      this.cartlist = s.data.items
      this.subtotal = s.data.subTotal
    })
  }
close(){
  this.dialog.closeAll()
}
}
 