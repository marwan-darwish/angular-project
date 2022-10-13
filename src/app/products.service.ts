import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private cart= new BehaviorSubject<any[]>([]);
  cartVal = this.cart.asObservable();
  private price= new BehaviorSubject(0);
  priceVal = this.price.asObservable();
  constructor(private http:HttpClient) {}
  getProducts(){
    return this.http.get("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")
  }

  getSingleProduct(id:number){
    return this.http.get(`https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/${id}`)
  }
  setPrice(value:any){
this.price.next(value)
  }
  addToCart(product:any,id:any){
    const alreadyThere = (element:any) => element.id === id;

    if(!this.cart.getValue().some(alreadyThere)){
      const modifyProduct={...product,quantity:1}
      const tempCart=[...this.cart.getValue(),modifyProduct]
      this.cart.next(tempCart)
      
    } else{
      const index=this.cart.getValue().findIndex((obj=>obj.id===id))
      console.log(index);
      this.cart.getValue()[index].quantity++
    }

    // console.log(this.cart.getValue().some(even));

    // console.log(this.cart);
    
  }

  increaseQuantity(id:any){
    const index=this.cart.getValue().findIndex((obj=>obj.id===id))
    this.cart.getValue()[index].quantity++
  }
  decreaseQuantity(id:any){
    const index=this.cart.getValue().findIndex((obj=>obj.id===id))
    if(this.cart.getValue()[index].quantity==1){
this.cart.getValue().splice(index,1)

    } else{
 this.cart.getValue()[index].quantity--
    }
  }
  removeProduct(id:any){
    const index=this.cart.getValue().findIndex((obj=>obj.id===id))
    this.cart.getValue().splice(index,1)

  }
}
