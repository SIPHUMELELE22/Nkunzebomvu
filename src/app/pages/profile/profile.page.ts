import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardContent, IonChip, IonCardTitle, IonCard, IonButton, IonIcon, IonButtons, IonLabel, IonList, IonItem, IonInput, IonAvatar, IonImg } from '@ionic/angular/standalone';
import { Route, Router, RouterModule } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonImg, IonAvatar, IonInput, IonItem, IonList, IonLabel, IonButtons, IonIcon, IonButton, IonCard, IonCardTitle, 
    IonChip, IonCardContent, IonCardHeader, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, RouterModule]
})
export class ProfilePage implements OnInit { 

    regInfo: any;

  constructor(private router : Router, private alertController: AlertController) { }


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

    const savedInfo = localStorage.getItem('regInfo');
    if (savedInfo) {
      this.regInfo = JSON.parse(savedInfo);
    }

  }

  signOut() {
    this.router.navigate(['/login']);
  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete your account? This action cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Delete canceled');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteAccount();
          }
        }
      ]
    });

    await alert.present();
  }

  deleteAccount() {
    console.log('Account deleted');
    this.router.navigate(['/sign-up']);
  }

}
