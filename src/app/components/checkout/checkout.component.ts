import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { CartService } from 'src/app/services/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {
  qty: number=2;
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
    ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  confirm(event: Event) {
    this.confirmationService.confirm({
        target: event.target,
        message: 'Are you sure that you want to buy it?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.messageService.add({
          severity: "info",
          summary: "Confirmed",
          detail: "You have bought it successfully"
        });
        },
        reject: () => {
          this.messageService.add({
            severity: "error",
            summary: "Rejected",
            detail: "You have rejected"
          });
        }
    });
}
}
