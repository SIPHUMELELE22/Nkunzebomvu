import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonThumbnail, IonIcon, IonLabel, IonItem, IonCard, IonImg, IonText, IonRow, IonCol, IonList, IonListHeader, IonItemGroup, IonInput, IonButton, IonFooter } from '@ionic/angular/standalone';
import { Router, RouterModule, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.page.html',
  styleUrls: ['./order-summary.page.scss'],
  standalone: true,
  imports: [IonFooter, IonButton, IonInput, IonItemGroup, IonListHeader, IonList, IonCol, IonRow, 
    IonText, IonImg, IonCard, IonItem, IonLabel, IonIcon, IonButtons, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonThumbnail]
})
export class OrderSummaryPage implements OnInit, OnDestroy {

  model: any=null;
  cartSub!: Subscription;
  item: any;
  
  public cartService = inject(CartService);
  private router = inject(Router);

  billingAddress: any;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      }
    }); 

    const savedAddress = localStorage.getItem('billingAddress');
    if (savedAddress) {
      this.billingAddress = JSON.parse(savedAddress);
    }
  
  }
  completeOrder() {
    console.log('Order completed');
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }

}
