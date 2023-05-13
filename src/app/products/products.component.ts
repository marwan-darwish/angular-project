import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../interface/product';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList=[]
wishList:Array<any>=[]
  constructor(private productService:ProductsService,private store:Store<any>) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe((products:any)=>(this.productList=products.map((product:any)=>{
      return{
         ...product
      }
   })));
   this.store.select("wishlistStore").subscribe((res)=>this.wishList=[...res.items])
  }
checkWishList(){
  console.log(this.wishList);
  
}
}
