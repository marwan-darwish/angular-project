import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from "@angular/common/locales/fr"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import{FormsModule} from "@angular/forms";
import { NotFoundComponent } from './not-found/not-found.component'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SingeProductComponent } from './singe-product/singe-product.component';
import { CartComponent } from './cart/cart.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoadingInterceptor } from './loading.interceptor';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { wishListReducer } from 'src/store/wishlist.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

registerLocaleData(localeFr,"fr")
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SingleProductComponent,
    NavbarComponent,
    RegisterComponent,
    NotFoundComponent,
    SingeProductComponent,
    CartComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule,
FormsModule,
HttpClientModule,
StoreModule.forRoot({
wishlistStore:wishListReducer
}),
StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
