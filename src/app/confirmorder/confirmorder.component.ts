import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent implements OnInit {
  cartlist: Array<{ _id: string, productId: Array<{ _id: string, name: string, price: string }>, quantity: string, total: string, price: string }> = []
    subtotal: any
    firstname:any
    lastname:any
    email:any
    country:any
    state:any
    city:any
    address:any
    pincode:any
    mobile:any
    phone:any
    paymentoption:any
  
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
      
    this.firstname=sessionStorage.getItem("firstname")
    this.lastname=sessionStorage.getItem("lasttname")
    this.email=sessionStorage.getItem("email")
    this.country=sessionStorage.getItem("country")
    this.state=sessionStorage.getItem("State")
    this.city=sessionStorage.getItem("city")
    this.address=sessionStorage.getItem("Address")
    this.pincode=sessionStorage.getItem("pincode")
    this.mobile=sessionStorage.getItem("mobile")
    this.paymentoption=sessionStorage.getItem("paymentoption")
    
    }
    confirm() {
      const httpOptions = {
        headers: new HttpHeaders({
          // 'Content-Type': 'application/json;charset=utf-8',
          // 'Accept'       : 'application/json',
          "Authorization": "Token " + sessionStorage.getItem("token")
        })
      }
      this._http.get<any>('http://localhost:3000/orders', httpOptions).subscribe(s => {
        let l = s.count
        console.log(s)
        for (let i = 0; i<= l-1 ; i++) {
          let id = s.orders[i]._id
          this._http.delete<any>('http://localhost:3000/orders/' + id, httpOptions).subscribe(s => {
  
            console.log(s)
  
          })
        }
      })
    }
  }