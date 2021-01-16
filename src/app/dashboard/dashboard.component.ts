import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //productlist: Array<{products:Array<{brand: string, category: string,features:Array<{Brand:string,Modelname:string,Power:string,ProductCategory:string}>,name: string,pcategory:string, productImage: string,scategory:string,shape:string,_id:string}> }> = []
  productlist: Array<{ products: Array<{ brand: string, category: string, features: Array<{ Brand: string, Modelname: string, Power: string, ProductCategory: string }>, name: string, pcategory: string, power: string, price: string; productImage: string, scategory: string, shape: string, _id: string }> }>
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Token " + sessionStorage.getItem("token")
      })
    }
    this._http.get<any>('http://localhost:3000/products', httpOptions).subscribe(s => {

      console.log(s)
      console.log(s.count)
      console.log(s.products)
      console.log(s.products[0].products)
      this.productlist = s.products

      console.log(this.productlist[0].products)


      console.log(this.productlist)
    })

  }
  slides = [{ 'image': '../../assets/images/GST.jpeg' }, { 'image': '../../assets/images/WINDMILL.jpg' }, { 'image': '../../assets/images/PRICE-LIST-2020.jpeg' }]
  id(s, i) {

    sessionStorage.setItem("ID", s)
    console.log(sessionStorage.getItem("ID"))
    sessionStorage.setItem("IMG", i)
    console.log(sessionStorage.getItem("IMG"))
    

  }
}