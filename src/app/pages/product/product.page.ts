import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product:any = "";
  products = [];
  cartItems = [];

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cartService.allProducts().subscribe((res:any) => {
      this.products = res;
    })

    this.activatedRoute.paramMap.subscribe( paramMap => {
      if(!paramMap.has('productId')) {
        return;
      }
      const productId = paramMap.get('productId');
      this.cartService.Product(productId).subscribe((product:any) => {
        this.product = product;
        console.log(product);
      });
    })
  }

  addToCart() {
    this.cartService.addCart(this.product._id);
  }

}
