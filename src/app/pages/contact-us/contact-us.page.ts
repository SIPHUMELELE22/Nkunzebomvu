import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonItem, IonButton, IonCardContent, IonCardTitle, IonIcon, IonCardHeader, IonCol, IonRow, IonCard, IonGrid, IonButtons } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
  standalone: true,
  imports: [IonButtons, IonGrid, IonCard, IonRow, IonCol, IonCardHeader, IonIcon, IonCardTitle, 
    IonCardContent, IonButton, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, RouterModule]
})
export class ContactUsPage implements OnInit {

  contact = {
    name: '',
    number: '',
    message: ''
  };
  
  isSending = false;

  constructor() { }

  sendMessage(event: Event) {
    event.preventDefault();
    this.isSending = true;
    setTimeout(() => {
      this.isSending = false;
      alert('Message sent!');
    }, 2000);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}
