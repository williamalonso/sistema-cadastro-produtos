import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  createProduct() {
    this.productService.showMessage('Produto criado com sucesso!');
  }

  deleteProduct() {
    this.router.navigate(['/list']);
    this.productService.showMessage('Produto deletado com sucesso!');
  }

}
