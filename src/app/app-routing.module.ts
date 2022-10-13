import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import{NotFoundComponent} from "./not-found/not-found.component"
import { SingeProductComponent } from './singe-product/singe-product.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  {
    path:"",
    component:ProductsComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"single-product/:id",
    component:SingeProductComponent
  },
  {
path:"cart",
component:CartComponent,
canActivate:[AuthGuard]
  },
  {
    path:"**",
    component:NotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
