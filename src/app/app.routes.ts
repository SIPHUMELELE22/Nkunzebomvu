import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    children: [ 
      {
      path: '',
      loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
      },
      {
      path: 'cart',
      loadComponent: () => import('./home/cart/cart.page').then( m => m.CartPage)
      },
      {
      path: 'products/:id',
      children: [
        {
          path: '',
          loadComponent: () => import('./home/product-details/product-details.page').then( m => m.ProductDetailsPage)
        },
          {
            path: 'cart',
            loadComponent: () => import('./home/cart/cart.page').then( m => m.CartPage)
          },
      ],
    },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./auth/sign-up/sign-up.page').then( m => m.SignUpPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./auth/reset-password/reset-password.page').then( m => m.ResetPasswordPage)
  },
  {
    path: 'vendors',
    loadComponent: () => import('./pages/vendors/vendors.page').then( m => m.VendorsPage)
  },
  {
    path: 'orders',
    loadComponent: () => import('./pages/orders/orders.page').then( m => m.OrdersPage)
  },
  {
    path: 'appointments',
    loadComponent: () => import('./pages/appointments/appointments.page').then( m => m.AppointmentsPage)
  },
  {
    path: 'checkout',
    loadComponent: () => import('./pages/checkout/checkout.page').then( m => m.CheckoutPage)
  },
  {
    path: 'order-summary',
    loadComponent: () => import('./pages/order-summary/order-summary.page').then( m => m.OrderSummaryPage)
  },
  {
    path: 'payment',
    loadComponent: () => import('./pages/payment/payment.page').then( m => m.PaymentPage)
  },
  {
    path: 'subscription',
    loadComponent: () => import('./pages/subscription/subscription.page').then( m => m.SubscriptionPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us/contact-us.page').then( m => m.ContactUsPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },

];