import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonMenu, IonTitle, IonToolbar, IonThumbnail, IonButtons, IonButton, IonIcon, IonLabel, IonText, IonSpinner, IonList, IonCol, IonRow, IonItem, IonToggle, IonInput, IonTextarea, IonSplitPane, IonListHeader, IonFooter, IonItemGroup, IonCard, IonImg, IonBackButton } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonImg, IonCard, IonItemGroup, IonFooter, IonThumbnail, IonListHeader, 
    IonSplitPane, IonMenu, IonTextarea, IonInput, IonToggle, IonItem, IonRow, IonCol, IonList, 
    IonSpinner, IonText, IonLabel, IonIcon, IonButton, IonButtons, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class CheckoutPage implements OnInit, OnDestroy {

  model: any;
  cartSub!: Subscription;
  public cartService = inject(CartService);

  billingAddress = {
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: ''
  };

  constructor( private router : Router) { }

  saveBillingAddress() {
    localStorage.setItem('billingAddress', JSON.stringify(this.billingAddress));
    this.router.navigate(['/order-summary']);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      },
    });
  }
  completeOrder() {
    console.log("Order completed!");
    this.router.navigate(['/order-summary']);
  }
  
  ngOnDestroy() {
    if (this.cartSub) this.cartSub.unsubscribe();
  }

}

