import { Component, OnInit,Input } from '@angular/core';

import { Product } from '../interface/product';
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
  constructor() { }

  ngOnInit(): void {
  }

}
