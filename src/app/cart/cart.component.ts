import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export interface CartElement {
  name: string;
  remove: any;
  products: string;
  price: any;
  quatity: string;
  total: any;
  productImage:any;
}
// const CART_DATA: CartElement[] = [
//   { remove: '', name: '', products: 'Vents 100 X Ventilation Fan	', price: 'Rs. 1640', quatity: '', total: '3280' },
//   { remove: '', name: '', products: 'Wipro Garnet 6W Wall Light (with USB)', price: 'Rs. 4799', quatity: '', total: '3280' },
//   { remove: '', name: '', products: 'Wipro Garnet 6W LED Linear COB', price: 'Rs.2067', quatity: '', total: '3280' },
//   { remove: '', name: '', products: 'Wipro Garnet 10W Aluminium LED Downlight', price: 'RS.940', quatity: '', total: '3280' },
//   { remove: '', name: '', products: 'Polycab 1.5 Sqmm 2core Shielded Screened FRLS Copper Flexible Cable', price: 'Rs.52', quatity: '', total: '52' },

// ];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['remove', 'name', 'products', 'price', 'quatity', 'total','productImage'];
  //dataSource = CART_DATA;
  k: any
  cartlist: Array<{ _id: string, productId: Array<{ _id: string, name: string, price: string,productImage:string}>, quantity: string, total: string, price: string,productImage:string }> = []
  //cartlist:Array<{price:string,productId:string,productImage:string,quantity:string}>
  s: any
  i: any
  z:any
  subtotal:any
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
      this.subtotal=s.data.subTotal
    })

  }
  inc(l) {
    l.quantity += 1
    let k=l.total
    this.z=l.productId._id
    sessionStorage.setItem("newQTY", l.quantity)
    console.log(sessionStorage.getItem("newQTY"))
    // const data = {
    //   "productId":this.z,
    //   "quantity":1
    //   }
    //   let t=sessionStorage.getItem("token")
    //   const httpOptions= {
    //     headers: new HttpHeaders({
    //       // 'Content-Type': 'application/json;charset=utf-8',
    //       // 'Accept'       : 'application/json',
    //       "Authorization": "Token " + sessionStorage.getItem("token")
    //     })
    // }
  
    // this._http.post<any>('http://localhost:3000/cart',data,httpOptions).subscribe(s => {
  
    //   console.log(s)
    // })
    l.total=l.price*l.quantity
    // let total=l.price*l.quantity
    // sessionStorage.setItem("total", total.toString())
    let newtotal=l.total-k
    console.log(newtotal)
    this.subtotal=this.subtotal+newtotal
    sessionStorage.setItem("subtotal",this.subtotal)
    
  }
  dec(l) {

    if (l.quantity >= 1) {
      l.quantity -= 1
      let k=l.total
      this.z=l.productId._id
      sessionStorage.setItem("newQTY", l.quantity)
      console.log(sessionStorage.getItem("newQTY"))
      // const data = {
      //   "productId":this.z,
      //   "quantity":l.quantity
      //   }
      //   let t=sessionStorage.getItem("token")
      //   const httpOptions= {
      //     headers: new HttpHeaders({
      //       // 'Content-Type': 'application/json;charset=utf-8',
      //       // 'Accept'       : 'application/json',
      //       "Authorization": "Token " + sessionStorage.getItem("token")
      //     })
      // }
    
      // this._http.post<any>('http://localhost:3000/cart',data,httpOptions).subscribe(s => {
    
      //   console.log(s)
      // })
      l.total=l.price*l.quantity
      let newtotal=k-l.total
      console.log(newtotal)
      this.subtotal=this.subtotal-newtotal
      sessionStorage.setItem("subtotal",this.subtotal)
    }
  }

}

