import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/services/header/header.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Aqui no construtor estamos instanciando o 'router', para podermos usar redirecionamento de rota na função "navigateToProductCreate" abaixo
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'list',
      routeUrl: '/list',
    };
   }

  ngOnInit(): void {
  }

  // Quando clicarmos no botão html, ele vai redirecionar o usuário para a url '/products/create'
  navigateToProductCreate(): void {
    this.router.navigate(['/product/create']);
  }

}
