import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';
import { Product } from '../../../interfaces/Product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  // Cria um produto com auxílio do Service
  createProduct() {
    this.productService.create(this.product).subscribe( ()=> {
      this.router.navigate(['/list']);
      this.productService.showMessage('Produto criado com sucesso!');
    });
  }

  deleteProduct() {
    this.router.navigate(['/list']);
    this.productService.showMessage('Produto deletado com sucesso!');
  }

}
