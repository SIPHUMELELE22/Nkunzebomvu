import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon, IonInput, IonButton, IonButtons, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonText, IonAvatar, IonImg, IonRow, IonCol } from '@ionic/angular/standalone';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonImg, IonAvatar, IonText, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonLabel, IonButtons, IonButton, 
    IonInput, IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule, RouterModule, NgFor]
})
export class VendorsPage implements OnInit {

    vendorInfo: any; 
    vendorList: any= [];

  constructor() { 
    const addedVendor = localStorage.getItem('vendorInfo');
    if (addedVendor) {
      this.vendorList = JSON.parse(addedVendor);
    }
  }
     // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

    //console.log('vendor list',addedVendor,'length', addedVendor?.length);
    //console.log('vendor ', this.vendorList)
   // this.vendorList = addedVendor ? JSON.parse(addedVendor): [];
  

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
 
    // window.alert('hello oninit');
    // const addedVendor = localStorage.getItem('vendorInfo');
    // console.log('vendor list',addedVendor,'length', addedVendor?.length);
    // this.vendorInfo = JSON.stringify(addedVendor);
  }