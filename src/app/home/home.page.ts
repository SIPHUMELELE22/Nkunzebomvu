import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { CartService } from '../services/cart/cart.service';
import { Subscription } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Swiper } from 'swiper';

import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { ActionSheet } from '@capacitor/action-sheet';

register();



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RouterModule,
    IonicModule, FormsModule, CommonModule, ReactiveFormsModule
  ],
})
export class HomePage implements OnInit, OnDestroy {



  sliderImages =[
    {
      'id': 1,
      'image': 'assets/slides/combo1.jpeg',
    },
    {
      'id': 1,
      'image': 'assets/slides/ladycare.jpeg',
    },
    {
      'id': 1,
      'image': 'assets/slides/maavula.jpeg',
    },
    {
      'id': 1,
      'image': 'assets/slides/combo1.jpeg',
    },   
    {
      'id': 1,
      'image': 'assets/slides/maavula.jpeg',
    }
  ];
  
  isModalOpen = false;
  isModalOpen1 = false;

  items: any[] = [];
  allItems: any[] = [];
  query!: string;
  totalItems = 0;
  cartSub!: Subscription;
   
  private api = inject(ApiService);
  public cartService = inject(CartService);

  vendorList!: [] ;

  vendorInfo = {
    name: '',
    phoneNumber: '',
    address: '',
    description: '',
  };

  appointmentData = {
    name: '',
    phoneNumber: '',
    date: '',
    message: '',
  };

  vendorForm!: FormGroup;

  constructor(private navController: NavController, private router : Router, private formBuilder: FormBuilder) {}
  

  ngOnInit(): void {
    this.vendorForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required, Validators.pattern('^[0-9]{10}$')],
      address: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.getItems();

    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }

  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

  onSearchChange(event: any) {
    console.log(event.detail.value);

    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.items = [];
    if (this.query.length > 0) {
      this.searchItems();
    } else {
      this.items = [...this.allItems];
    }
  }

  searchItems() {
    this.items = this.api.items.filter((item) =>
      item.name.toLowerCase().includes(this.query)
    );
  }

  setOpen1(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  addVendor(){
    const vendorReg = {
      name: this.vendorForm.value.name,
      phoneNumber: this.vendorForm.value.phoneNumber,
      address: this.vendorForm.value.address,
      description: this.vendorForm.value.description,
    }
    console.log(vendorReg);
    const oldVendorList = localStorage.getItem('vendorInfo');
    const newVendorList = oldVendorList ? JSON.parse(oldVendorList): [];
    
    newVendorList.push(vendorReg);
    localStorage.setItem('vendorInfo', JSON.stringify(newVendorList));
    this.router.navigate(['/vendors']);
  }

  async openActionSheet()
  {
      const result = await ActionSheet.showActions({
        title: 'Çhoose Options',
        message: 'Select an option',
        options: [
          {
          title: 'Camera',
          icon: 'camera-outline',
        },
        {
          title: 'Photo Gallery',
          icon: 'albums-outline',
        }
      ]
      });
      console.log('sheetaction', result);;
      
  }

  saveAppointment(){
    localStorage.setItem('appointmentData', JSON.stringify(this.appointmentData));
    this.router.navigate(['/appointments']);
  }

  ngOnDestroy(): void {
    if (this.cartSub) this.cartSub.unsubscribe();
  }
}
