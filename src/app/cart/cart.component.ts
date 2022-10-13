import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:any=[]
cartTotal:number=0
total:number=0
  constructor(private productService:ProductsService,private counterService:CounterService) { }

  ngOnInit(): void {
    this.productService.cartVal.subscribe((val)=>this.cart=val)
    this.productService.priceVal.subscribe((val)=>this.total=val)
    this.counterService.counterVal.subscribe((val)=>this.cartTotal=val)
  }
incQuantity(id:any,price:any){
this.productService.increaseQuantity(id)
this.productService.setPrice(parseInt(price)+this.total)
this.counterService.setCounter(++this.cartTotal)
}
decQuantity(id:any,price:any){
  this.productService.decreaseQuantity(id)
  this.productService.setPrice(this.total-parseInt(price))
  this.counterService.setCounter(--this.cartTotal)

}
removeitem(id:any,price:any,quantity:any){
  this.productService.setPrice(this.total-(parseInt(price)*parseInt(quantity)))
this.productService.removeProduct(id)
this.counterService.setCounter(this.cartTotal-parseInt(quantity))
}
}
