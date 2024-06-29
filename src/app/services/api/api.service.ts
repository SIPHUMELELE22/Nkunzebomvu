import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      id: '1',
      name: 'Combo 1',
      price: 350,
      status: true,
      cover: 'assets/products/combo1.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus'
    }, 
    {
      id: '2',
      name: 'Combo 2',
      price: 300,
      status: true,
      cover: 'assets/products/combo2.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus'
    },
    {
      id: '3',
      name: 'Mavula Kuvaliwe',
      price: 100,
      status: true,
      cover: 'assets/products/maavula.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus'
    },
    {
      id: '4',
      name: 'Mathunzini Ikhubalo',
      price: 200,
      status: true,
      cover: 'assets/products/ikhabulo.jpeg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus'
    },
    {
      id: '5',
      name: 'Aloevera Honey & Ginger Juice',
      price: 150,
      status: true,
      cover: 'assets/products/gingerjuice.jpeg',
      description: 'Improves imune, relieves joint pain, prevents ageing.'
    },
    {
      id: '6',
      name: 'The Lady Care Capsule',
      price: 250,
      status: true,
      cover: 'assets/products/ladycare.jpeg',
      description: 'Rejuvinates urinary sytem, keeps the body strong.'
    },
    {
      id: '7',
      name: 'The Panch Tulsi Drop',
      price: 250,
      status: true,
      cover: 'assets/products/panch.jpeg',
      description: 'Strong healthy bones, detoxifier and purifier.'
    },
    {
      id: '8',
      name: 'Aloevera Honey & Ginger Juice',
      price: 150,
      status: true,
      cover: 'assets/products/gingerjuice.jpeg',
      description: 'Improves imune, relieves joint pain, prevents ageing.'
    },
  ];

  constructor() { }
}
