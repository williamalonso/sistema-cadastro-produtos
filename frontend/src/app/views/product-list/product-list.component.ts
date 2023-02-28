import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Aqui no construtor estamos instanciando o 'router', para podermos usar redirecionamento de rota na função "navigateToProductCreate" abaixo
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // Quando clicarmos no botão html, ele vai redirecionar o usuário para a url '/products/create'
  navigateToProductCreate(): void {
    this.router.navigate(['/product/create']);
  }

}
