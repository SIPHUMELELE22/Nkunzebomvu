import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonThumbnail, IonContent, IonButtons, IonBackButton, IonButton, IonLabel, IonIcon, IonItem, IonCard, IonImg, IonText, IonCol, IonRow, IonList, IonListHeader, IonItemGroup, IonFooter } from "@ionic/angular/standalone";
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [IonFooter, IonItemGroup, IonListHeader, IonList, IonRow, IonCol, IonText, IonImg, IonCard, IonItem, IonThumbnail, IonIcon, IonLabel, IonButton, IonBackButton, IonButtons, 
    IonContent, IonToolbar, IonTitle, IonHeader, DecimalPipe, RouterModule ]
})
export class CartPage implements OnInit, OnDestroy {

  previous!: string;
  cartSub!: Subscription;
  model: any = null;

  private router = inject(Router);
  public cartService = inject(CartService);

  constructor() { }

  ngOnInit() {
    this.checkUrl();

    // this.cartService.getCart();
    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.model = cart;
      }
    });

  }

  checkUrl(){
    const route_url = this.router.url;
    const urlParts = route_url.split('/');
    urlParts.pop();
    console.log(urlParts);
    this.previous = urlParts.join('/');
    console.log('url: ', this.previous);
  }

  addQuantity(item: any) {
    this.cartService.addQuantity(item);
  }

  subtractQuantity(item: any) {
    this.cartService.subtractQuantity(item);
  }

  ngOnDestroy(): void {
   if (this.cartSub) this.cartSub.unsubscribe();
  }
}
