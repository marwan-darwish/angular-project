import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../interface/product';
import { CounterService } from '../counter.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
@Input() product:Product={
  "createdAt":"",
  "name":"",
  "image":"",
  "rate":0,
  "count":0,
  "description":"Product description goes here",
  "price":"0",
  "reviews":[
     "Great one"
  ],
  "id":"0"
}
counter:number=0
prices:any=0
cart:any=[]
  constructor(private router:Router,private counterService:CounterService,private addToCart:ProductsService) { }

  ngOnInit(): void {
    this.counterService.counterVal.subscribe((val) => this.counter = val)
    this.addToCart.cartVal.subscribe((val)=>this.cart=val)
this.addToCart.priceVal.subscribe((val)=>this.prices=val)
  }
  handleClickOnproductButton(){
    this.router.navigate(['/single-product' , this.product.id ])
  }
  increaseCounter(){
  

    this.counterService.setCounter(++this.counter)
    this.addToCart.addToCart(this.product,this.product.id)
    this.addToCart.setPrice(parseInt(this.product.price)+this.prices)
    // console.log(this.cart);
    console.log(this.prices);
    
  }
}
