import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  imgID = "Angular";
  img="../../assets/images/walllight.jpeg"
  k:string
  public imagesUrl;
 IMG:string
 s:any
 i:any

  constructor(private _http: HttpClient) {
  }

  ngOnInit(){
   this.magnify("myimage", 3);
    this.imagesUrl = ['../../assets/images/walllight.jpeg', '../../assets/images/led strip.jpeg', '../../assets/images/led-downlight_600.jpeg'];
    this.IMG=sessionStorage.getItem("IMG")
   }
  
   magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize =
      img.width * zoom + "px " + img.height * zoom + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /*set the position of the magnifier glass:*/
      glass.style.left = x - w + "px";
      glass.style.top = y - h + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition =
        "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }

cart(){
  this.k=sessionStorage.getItem("ID")
  this.s = document.getElementById("qty").innerText
  
  sessionStorage.setItem("QTY",this.s)
  console.log(sessionStorage.getItem("QTY"))
  const data = {
    "productId":this.k,
    "quantity":sessionStorage.getItem("QTY")
    }
    let t=sessionStorage.getItem("token")
    const httpOptions= {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json;charset=utf-8',
        // 'Accept'       : 'application/json',
        "Authorization": "Token " + sessionStorage.getItem("token")
      })
  }

  this._http.post<any>('http://localhost:3000/cart',data,httpOptions).subscribe(s => {

    console.log(s)
  })
}
inc() {
  this.s = document.getElementById("qty").innerText

  this.i = parseInt(this.s)
  this.i = this.i + 1
  document.getElementById("qty").innerHTML = "" + this.i
}
dec() {
  this.s = document.getElementById("qty").innerText

  this.i = parseInt(this.s)
  if (this.i >= 1) {
    this.i -= 1
    document.getElementById("qty").innerHTML = "" + this.i
  }
}
}

 

