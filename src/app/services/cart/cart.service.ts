import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StringsEnum } from 'src/app/enum/strings.enum';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart = new BehaviorSubject<any>(null);
  private storage = inject(StorageService);

  model: any = null;
  total_delivery_charge = 100;

  cartStoreName = StringsEnum.CART_STORAGE;
  currency = StringsEnum.CURRENCY;

  get cart(){
    return this._cart.asObservable();
  }

  constructor() { 

    this.getCart();
  }

  addQuantity(item: any){
   if (this.model) {
    const index = this.model.items.findIndex((data: any) => data.id == item.id);
    
    if (index >= 0) {
      this.model.items[index].quantity += 1;

    } else {
      const items = [{...item, quantity: 1}];
      this.model.items = items.concat(this.model.items);
    }
   
  } else {
    this.model ={
      items: [{...item, quantity: 1}]
    };
   }
   return this.calculate();
  } 

  subtractQuantity(item: any) {
    const index = this.model.items.findIndex((data: any) => data.id == item.id);
     if (index >= 0) {
      if (this.model.items[index]?.quantity > 0) {
        this.model.items[index].quantity -= 1;
      }
      
      return this.calculate();
     }
  }

  calculate() {
    const items = this.model.items.filter((item: any) => item.quantity > 0);

    if (items?.length == 0) {
      this.clearCart();
      return;
    }
    let totalItem = 0;
    let totalPrice = 0;

    for (const element of items) {
      totalItem += element.quantity;
      totalPrice += element.price * element.quantity;
    }

    const grandTotal = totalPrice + this.total_delivery_charge;

    this.model = {
      ...this.model,
      totalItem,
      totalPrice,
      total_delivery_charge: this.total_delivery_charge,
      grandTotal,
    };

    this._cart.next(this.model);
    this.saveCart(this.model);
    
    console.log(this.model);
    
    return this.model;

  }
  saveCart(data: any) {
   const model = JSON.stringify(data);
   this.storage.setStorage(this.cartStoreName, model);
  }
  clearCart(){
    this.storage.removeStorage(this.cartStoreName);
    this.model = null;
    this._cart.next(null);
  } 

  async getCart() {
    let data: any = this._cart.value;

    if (!data) {
      data = await this.storage.getStorage(this.cartStoreName);
      console.log(data);

      if (data?.value){ 
        this.model = JSON.parse(data.value);
        this._cart.next(this.model);
      }
    }
    console.log('get cart', this.model);

    return this.model;
  }

}
