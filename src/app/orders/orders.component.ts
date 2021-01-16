import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  cartlist: Array<{ _id: string, productId: Array<{ _id: string, name: string, price: string }>, quantity: string, total: string, price: string }> = []
  subtotal: any
  firstname:any
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    const httpOptions= {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json;charset=utf-8',
        // 'Accept'       : 'application/json',
        "Authorization": "Token " + sessionStorage.getItem("token")
      })
    }
    this._http.get<any>('http://localhost:3000/cart',httpOptions).subscribe(s => {

      console.log(s)
      this.cartlist = s.data.items
      this.subtotal = s.data.subTotal
    })
 
 


}
}