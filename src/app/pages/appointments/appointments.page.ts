import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonButton, IonLabel, IonList, IonItem, IonCard, IonCardHeader, IonCardContent, IonCol, IonText } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
  standalone: true,
  imports: [IonText, IonCol, IonCardContent, IonCardHeader, IonCard, IonItem, IonList, IonLabel, IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, RouterModule]
})
export class AppointmentsPage implements OnInit {

    appointmentData: any;

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() { 

    const saveAppointment = localStorage.getItem('appointmentData');
    if (saveAppointment){
      this.appointmentData = JSON.parse(saveAppointment);
    }
  }

}
