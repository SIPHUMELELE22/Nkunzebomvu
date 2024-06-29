import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class SignUpPage implements OnInit {

  regInfo = {
    name: '',
    email: '',
    password1: '',
    password2: '',
    phoneNumber: '',

  };

  constructor( private router : Router) { }

  saveInfo(){
    localStorage.setItem('regInfo', JSON.stringify(this.regInfo));
    this.router.navigate(['/login']);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  
  }

}

