import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  products = [
    
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.allProducts().subscribe((res:any) => {
      console.log(res)
      this.products = res;
    })
  }

}
