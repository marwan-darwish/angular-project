import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../interface/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList=[]
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
   this.productService.getProducts().subscribe((products:any)=>(this.productList=products.map((product:any)=>{
      return{
         ...product
      }
   })));
   
  }

}
