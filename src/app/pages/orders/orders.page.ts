import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, IonBackButton, IonButtons, IonLabel, IonButton, IonIcon, IonText, IonFooter, IonItem, IonListHeader, IonList, IonItemGroup, IonImg, IonCol, IonRow, IonCard, IonCardContent, IonDatetimeButton, IonModal, IonDatetime, IonAvatar } from '@ionic/angular/standalone';
import { Router, RouterModule, Routes } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonDatetime, IonModal, IonDatetimeButton, IonCardContent, IonCard, IonRow, IonCol, IonImg, IonItemGroup, IonThumbnail, IonList, IonListHeader, IonItem, IonFooter, IonText, IonIcon, IonButton, IonLabel, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class OrdersPage implements OnInit, OnDestroy {

  cartSub!: Subscription;

  paymentInfo: any;

  public cartService = inject(CartService);
  model: any;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { 

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      },
    });

  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }
}