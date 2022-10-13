import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-singe-product',
  templateUrl: './singe-product.component.html',
  styleUrls: ['./singe-product.component.css']
})
export class SingeProductComponent implements OnInit {
productDetail:any={}
  constructor(private productService:ProductsService, private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const params=this.route.snapshot.params
    this.productService.getSingleProduct(params['id']).subscribe((details)=>this.productDetail=details)
  }

}
