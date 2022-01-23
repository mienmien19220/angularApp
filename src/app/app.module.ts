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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DataViewModule } from 'primeng/dataview';
import { GameStoreComponent } from './components/game-store/game-store.component';
import { RippleModule } from 'primeng/ripple';
import { ProductService } from './components/game-store/game-productservice';
import { RatingModule } from 'primeng/rating';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ListUserComponent } from './components/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    DetailsComponent,
    GameTabsComponent,
    FooterComponent,
    DropdownComponent,
    GameStoreComponent,
    LoginComponent,
    SignupComponent,
    ListUserComponent,


  ],
  imports: [
    BrowserModule,
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
    ReactiveFormsModule
  ],
  providers:
    [
      ProductService,
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
