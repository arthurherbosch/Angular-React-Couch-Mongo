import { NgModule }      from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent }  from './app.component'
import { ProductListComponent }  from './product-list/product-list.component'
import { ProductAddComponent } from './product-add/product-add.component'
import { ProductSearchComponent } from './product-search/product-search.component'
import { ProductDeleteComponent } from './product-delete/product-delete.component'
import { ProductEditComponent } from './product-edit/product-edit.component'
import { ProductService } from './service/product.service'
import { AppRoutingModule } from './app-routing.module'
import { LoginComponent } from './login/login.component'
import { AuthenticationService } from './service/authentication.service'

@NgModule({
  imports:      [ BrowserModule, 
                  HttpClientModule,
                  ReactiveFormsModule, 
                  AppRoutingModule ],
  declarations: [ AppComponent, 
                  ProductListComponent,
                  ProductAddComponent, 
                  ProductSearchComponent,
                  ProductDeleteComponent,
                  ProductEditComponent,
                  LoginComponent ],
  providers:    [ ProductService,
                  AuthenticationService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
