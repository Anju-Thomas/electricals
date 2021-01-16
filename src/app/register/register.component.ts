import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }
  firstname:string
  lastname:string
  email:string
  mobile:number
  password:string
  confirm:string


register(){
  console.log("First Name: ",this.firstname);
    console.log("Last Name : ",this.lastname);
    console.log("Email : ",this.email);
    console.log("Mobile : ",this.mobile);
    console.log("Password : ",this.password);
    console.log("confirm password : ",this.confirm);

    const data = {
      "firstname":this.firstname,
      "lastname":this.lastname,
      "email":this.email,
      "mobile":this.mobile,
      "password":this.password,
      "password2":this.confirm
      }
    this._http.post<any>('http://localhost:3000/user/signup',data).subscribe(s => {

      console.log(JSON.stringify(s))
      console.log(s.message)
    })
    
}
navigategoogle(){
  window.location.href='http://www.gmail.com'
}
navigatefb(){
  window.location.href='http://www.facebook.com'
}
}
