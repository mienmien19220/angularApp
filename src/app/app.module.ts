import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs';
import { DropdownModule } from 'primeng/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.intercptor';

import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from './components/footer/footer.component';
import {ButtonModule} from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { GameStoreComponent } from './components/game-store/game-store.component';
import { RippleModule } from 'primeng/ripple';
import { ProductService } from './components/game-store/game-productservice';
import { RatingModule } from 'primeng/rating';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import * as slider from '@angular/material/slider';

import { MessagesModule} from 'primeng/messages';
import { MessageModule} from 'primeng/message';
import { ConfirmPopupModule} from 'primeng/confirmpopup';
import { ConfirmationService, MessageService} from 'primeng/api';
import { ToastModule } from "primeng/toast";
import {PanelModule} from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ProductsComponent } from './components/admin/products/products.component';
import { MyLibModule } from 'my-lib';

import {ChartModule} from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { MenubarComponent } from './components/menubar/menubar.component';
import { CartComponent } from './components/cart/cart.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormBuilder } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminModule } from './components/admin/module/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    GameTabsComponent,
    FooterComponent,
    GameStoreComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    MenubarComponent,
    CartComponent,
    CheckoutComponent,
    ContactusComponent,
    ProfileComponent,
    
    
  ],
  imports: [
    BrowserModule,
    slider.MatSliderModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    DataViewModule,
    RippleModule,
    RatingModule,
    ReactiveFormsModule,
    FileUploadModule,
    MyLibModule,
    MessagesModule,
    MessageModule,
    ConfirmPopupModule,
    ToastModule,
    DialogModule,
    PanelModule,
    MenubarModule,
    ChartModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    ConfirmDialogModule,
    AdminModule
  ],
  providers:
    [
      MessageService,
      ConfirmationService,
      ProductService,
      FormBuilder,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpHeadersInterceptor,
        multi: true,
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorsInterceptor,
        multi: true,
      }
      

    ],
  bootstrap: [AppComponent],
})
export class AppModule { }
