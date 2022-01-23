import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { GameStoreComponent } from './components/game-store/game-store.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListComponent } from './components/list/list.component';
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
    path: 'list',
    component:ListComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }