import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products! : Array<any>;

  constructor() {
    this.products=[
      {id:1, name:"computer", price: 555},
      {id:2, name:"imprimante", price: 2345},
      {id:3, name:"smart watch", price: 654},
      ];

   }
public getAll(){
return this.products;

}

}
