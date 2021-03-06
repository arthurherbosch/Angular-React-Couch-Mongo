import { Component } from '@angular/core'
import { Router, ActivatedRoute } from "@angular/router"
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Product } from '../service/model/product'
import { ProductService } from '../service/product.service'

@Component({
  selector: 'product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent {
 
 productName: string
 product = this.fb.group({
  name: ['', Validators.required],
  brand: ['', Validators.required],
  description: ['', Validators.required],
  price: ['', Validators.required],
})

 constructor(private ps: ProductService,
             private fb: FormBuilder, 
             private router: Router,
             private activeroute: ActivatedRoute) {

    // simple splitting of url parts
    this.productName = router.url.split('/')[2]
    // preferred way of handling active route
    this.activeroute.params
      .subscribe(params => { this.productName = params.name;
                              console.log(params);
                             this.ps.searchOneProduct(this.productName)
                                .subscribe(data => { this.product.controls['name'].setValue(data.name)
                                                     this.product.controls['brand'].setValue(data.brand)
                                                     this.product.controls['description'].setValue(data.description)
                                                     this.product.controls['price'].setValue(data.price)
                                                    }, 
                                          error => { console.log(error) })
                            }
                )
 }

 onSubmit() {
    this.ps.editProduct(new Product(this.product.value.name,
                                    this.product.value.brand,
                                    this.product.value.description,
                                    this.product.value.price))
    this.router.navigate([''])
 }
}
