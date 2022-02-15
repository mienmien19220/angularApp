import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DetailsComponent } from './components/details/details.component';
import { GameStoreComponent } from './components/game-store/game-store.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:game-search',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component:DetailsComponent,
  },

  {
    path: 'gameProduct',
    component:GameStoreComponent,
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'signup',
    component:SignupComponent,
  },
  {
    path: 'user',
    component:ListUserComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'contact',
    component: ContactusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }