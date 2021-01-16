import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  email:string
  password:string
  
  constructor(private router:Router,private _http: HttpClient,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(){
    this.dialog.closeAll()
    console.log("Email : ",this.email);
    console.log("Password : ",this.password);
    const data = {
      "email":this.email,
      "password":this.password
      }
    this._http.post<any>('http://localhost:3000/user/login',data).subscribe(s => {

      console.log(s)
      console.log(s.token)
      sessionStorage.setItem("token",s.token)
    })
  }
  register(){
    this.dialog.closeAll()
  }
  navigategoogle(){
    window.location.href='http://www.gmail.com'
  }
  navigatefb(){
    window.location.href='http://www.facebook.com'
  }
}
