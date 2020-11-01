import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //to store the array of the current products in the cart
  items = [];

  constructor(private http: HttpClient) { }

  // Add items to the cart
  addToCart(product){
    this.items.push(product);
  }

  // Collects the items users add to the cart and returns each item with its associated quantity
  getItems(){
    return this.items;
  }

  // Return an empty array
  clearCart(){
    this.items = [];
    return this.items;
  }

  // Retrieve data from json file using httpClient
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }
}
