import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./dashboard/admin.component";
import { ProductsComponent } from "./products/products.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
  {
    path: 'user',
    component:ListUserComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'dashboard',
    component: AdminComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }