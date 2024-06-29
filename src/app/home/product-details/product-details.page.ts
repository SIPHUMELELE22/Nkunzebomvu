import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonIcon, IonItem, IonLabel, IonText, IonFooter, IonBadge } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import {NavController} from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api/api.service';
import { UpperCasePipe } from '@angular/common';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [IonBadge, IonFooter, IonText, IonLabel, IonItem, IonIcon, IonButtons, IonBackButton, IonButton, IonContent, IonHeader, 
    IonTitle, IonToolbar, UpperCasePipe, RouterModule]
})
export class ProductDetailsPage implements OnInit, OnDestroy {

  id!: string;
  item: any;
  addToCart: any;
  totalItems = 0;
  cartSub!: Subscription;
  
  private route = inject(ActivatedRoute)
  private navCtrl = inject(NavController);
  private api = inject(ApiService);
  public cartService = inject(CartService);

  constructor() { }

  ngOnInit() {

    this.getItem();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        console.log(cart);
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }
  getItem(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Check id: ', id);
    if (!id || id == '0') {
      this.navCtrl.back();
      return;
    }
    this.id = id;

    this.item = this.api.items.find((record) => record.id == id);
    console.log(this.item);
  }
 addItem() {
    const result = this.cartService.addQuantity(this.item);
    this.addedText();
  }

  addedText() {
    this.addToCart = 'Added to Cart';
    setTimeout(() => {
      this.addToCart = null;
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }

}
