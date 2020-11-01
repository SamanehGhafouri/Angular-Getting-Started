import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  //to store the array of the current products in the cart
  items = [];

  constructor() { }

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
}
