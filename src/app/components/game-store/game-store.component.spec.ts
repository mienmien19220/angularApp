import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from './game-productservice';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameStoreComponent } from './game-store.component';
import { CartService } from 'src/app/services/cart.service';
import { of } from 'rxjs';

fdescribe('GameStoreComponent', () => {
  let component: GameStoreComponent;
  let fixture: ComponentFixture<GameStoreComponent>;
  const mockService = jasmine.createSpyObj('mockService',['addtoCart']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GameStoreComponent],
      providers: [{ provide: CartService, useValue: mockService }]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should created', () => {
    mockService.product.and.returnValue(of({status: 200}));
    component.addtocart('');
    expect(component).toBeTruthy();
  });
});
