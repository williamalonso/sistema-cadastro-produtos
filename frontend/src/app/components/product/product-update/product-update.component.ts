import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product; // esse é o nosso Produto em si. A "!" significa que ele vai vir com certeza, e seu tipo é Product.

  constructor(
    private products: ProductService, // inicializando nosso service "Product"
    private route: ActivatedRoute, // O ActivatedRoute é para trazer o id para usar no ngOnInit
    private router: Router, // serviço de rotas
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id"); // precisamos trazer o id que está na url

    this.products.readById(id).subscribe( (item) =>  { // função get que traz os dados do service.
      this.product = item // atribui os dados do backend para a variável 'product'      
    });
  }

  cancel() {
    this.router.navigate(['/list']);
  }

  updateProduct() {
    this.products.update(this.product).subscribe( () => {
      this.products.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(['/list']);
    });
  }

}
