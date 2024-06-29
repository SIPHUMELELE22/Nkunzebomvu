import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet, IonItem, IonButton, IonIcon, IonLabel, IonHeader, IonList, IonToolbar, IonContent, IonMenuButton, IonMenu, IonMenuToggle, IonTitle, IonNavLink, IonButtons } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personOutline, lockClosedOutline,bagHandleOutline,
  bagHandle,
  homeOutline,
  listOutline,
  calendarOutline,
  chevronBackOutline,
  settingsOutline,
  callOutline,
  mailOutline,
  cartOutline,
  receiptOutline,
  informationCircleOutline,
  menuOutline,
  logOutOutline,
  trashOutline,
  addOutline,
  removeOutline,
  locationOutline,
  cameraOutline,
  createOutline,
  eyeOutline,
  chatbubbleOutline,
  eyeOffOutline,
  albumsOutline, } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonButtons, IonNavLink, IonTitle, IonContent, IonToolbar, IonList, IonHeader, IonLabel, IonIcon, IonButton, IonItem, IonApp, 
    IonRouterOutlet, IonMenuToggle, IonMenu, IonMenuButton, CommonModule, RouterModule],
})
export class AppComponent {
  constructor() { 
    addIcons({
      personOutline,
      lockClosedOutline,
      bagHandleOutline,
      bagHandle,
      calendarOutline,
      homeOutline,
      listOutline,
      settingsOutline,
      callOutline,
      mailOutline,
      chevronBackOutline,
      cartOutline,
      receiptOutline,
      informationCircleOutline,
      menuOutline,
      logOutOutline,
      trashOutline,
      addOutline,
      removeOutline,
      locationOutline,
      cameraOutline,
      createOutline,
      eyeOutline,
      chatbubbleOutline,
      albumsOutline,
      eyeOffOutline
    });
  }
}
