import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartItems:any[] = [];
  url:any = environment.apiUrl;
  products = [];

  constructor(private http: HttpClient) { }

  addToCart(item:any) {
    let holdItems = this.cartItems.push(item);
    console.log(holdItems);

    // check the array if the incoming product id exists
    // if it exist return
    // else push the incoming data to the array;

    // const existItem = this.cartItems.find((x) => x._id === item._id);
    // console.log("Exist Item", existItem);

    // if(existItem) {
    //   console.log(true)
    //   // return this.cartItems.map((x) => {
    //   //   x.product === existItem.product ? item : x
    //   // })
    //   // return {
    //   //   ...this.cartItems, cartItems: this.cartItems.map((x) => {
    //   //     x.product === existItem.product ? item : x
    //   //   })
    //   // }
    // }
    // else {
    //   console.log(false)
    //   let holdItems = this.cartItems.push(item);
    //   console.log(holdItems)
    //   return holdItems
    //   //return [this.cartItems, item]
    //   // return {
    //   //   ...this.cartItems, 
    //   //   cartItems: [this.cartItems, item]
    //   // }
    // }
  }

  removeFromCart(item) {
    return {
      ...this.cartItems,
      cartItems: this.cartItems.filter((x) => x.product !== item)
    }
  }

  addCart(id:any, qty?:any) {
    let datas = {
      _id: "92",
      name: "kfkfk"
    }
    console.log(datas)
    //get single item with id;
    let uri = this.url + `/product/${id}`;
    const data = this.Product(id);
    console.log(data);
    const addCart = this.addToCart(datas);
    localStorage.setItem("cart", JSON.stringify(addCart));
  }

  allProducts() {
    let uri = this.url + 'products';
    let data = this.http.get(uri);
    return data;
  }

  Product(id) {
    let uri = this.url + `product/${id}`;
    return this.http.get(uri);
  }

  AddToCartList(data:any, cartItems:any, id:any) {
    try {
      
    } catch (error) {
      throw error;
    }
  }


}
