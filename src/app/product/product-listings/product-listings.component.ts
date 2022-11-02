import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingsComponent implements OnInit {
   products: any

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const productsObservable =this.productService.getProducts()
    productsObservable.subscribe(
        (data: any) => {
          this.products = data
        },
        (err: any) => {
          console.error('次のエラーが発生しました:' + err)
        }
      )
  }
}


