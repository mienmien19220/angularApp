import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../dashboard/admin.component';
import { ListUserComponent } from '../list-user/list-user.component';
import { AdminRoutingModule } from '../admin.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GaugeModule } from 'angular-gauge'; //Chart
import { MatTabsModule } from '@angular/material/tabs';
import { DropdownModule } from 'primeng/dropdown';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import {ButtonModule} from 'primeng/button';
// import { DataViewModule } from 'primeng/dataview';

import { RippleModule } from 'primeng/ripple';

import { RatingModule } from 'primeng/rating';

import * as slider from '@angular/material/slider';

import { MessageModule} from 'primeng/message';
import { ConfirmPopupModule} from 'primeng/confirmpopup';
import { ConfirmationService, MessageService} from 'primeng/api';
import { ToastModule } from "primeng/toast";
import {PanelModule} from 'primeng/panel';
import {ChartModule} from 'primeng/chart';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { FormBuilder } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import { ProductService } from '../../game-store/game-productservice';
import { HttpHeadersInterceptor } from 'src/app/interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from 'src/app/interceptors/http-errors.intercptor';
import { MessagesModule } from 'primeng/messages';


@NgModule({
  declarations: [
    AdminComponent,
    ListUserComponent,
    SearchBarComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    FileUploadModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    PanelModule,
    MessagesModule,
    MessageModule,
    slider.MatSliderModule,
    ConfirmPopupModule,
    ToastModule,
    RippleModule,
    RatingModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    DropdownModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    InputTextModule
  ],
  exports: [
    AdminComponent    
  ],
  providers: [
    FormBuilder,
    MessageService,
    ConfirmationService,
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
  bootstrap: [AdminComponent],
})

export class AdminModule { }
