import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private productService: ProductService, // inicializando nosso service "Product"
    private route: ActivatedRoute, // O ActivatedRoute é para trazer o id para usar no ngOnInit
    private router: Router, // serviço de rotas
  ) {
    this.dataSource = new TableModelDataSource();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id"); // precisamos trazer o id que está na url

    this.productService.read().subscribe( (items) => {
      this.products = items;
    })
  }

  delete(id: any) {
      this.productService.delete(id).subscribe(); // vou esperar o registro ser excluído pelo Banco
      this.productService.showMessage("Momento excluído com sucesso!"); // exibe mensagem de sucesso
      this.router.navigate(['/list']); // redireciona para home
  }

}
