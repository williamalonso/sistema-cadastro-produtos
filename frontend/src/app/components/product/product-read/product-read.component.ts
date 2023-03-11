import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { TableModelDataSource } from '../table-model/table-model-datasource';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  dataSource: TableModelDataSource;

  // array que vai receber os dados do backend na função read do Service (select * from...)
  products: Product[] = [];

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private productService: ProductService
  ) {
    this.dataSource = new TableModelDataSource();
  }

  ngOnInit(): void {
    this.productService.read().subscribe( (items) => {
      this.products = items;
      // console.log(this.products);
    })
  }

}
