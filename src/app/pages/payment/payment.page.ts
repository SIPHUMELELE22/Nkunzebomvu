import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, IonLabel, IonText, IonItem, IonImg, IonCol, IonRow, IonIcon, IonInput, IonFooter, IonButton, IonList, IonListHeader, IonCard, IonItemGroup, IonButtons, IonTextarea } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: true,
  imports: [IonTextarea, IonButtons, IonItemGroup, IonCard, IonListHeader, IonThumbnail, IonList, IonButton, 
    IonFooter, IonInput, IonIcon, IonRow, IonCol, IonImg, IonItem, IonText, IonLabel, IonContent, 
    IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule],
})
export class PaymentPage implements OnInit {

  model: any;
  cartSub!: Subscription;


  paymentInfo = {
    fullName: '',
    cardNumber:'',
    expiryDates: '',
    cardVerification:'',
  };

  addPayment(){
    this.router.navigate(['/orders'])
  }

  constructor(private router : Router) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
