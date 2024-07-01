import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {



  handleDeleteProduct(p: any) {
let index = this.products.indexOf(p);
this.products.splice(index, 1);
}

products! : Array<any>;

constructor(private productService : ProductService){}

  ngOnInit(): void {

this.products=this.productService.getAll();


  }

}
