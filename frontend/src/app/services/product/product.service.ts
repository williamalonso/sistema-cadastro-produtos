import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/Product';

@Injectable({ // Essa diretiva Injectable permite injetar esse service em um componente
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:3001/products";
  
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  /*
    A função abaixo insere dado no backend.
    Ela recebe como parâmetro uma variável do tipo "Produto" que declaramos na interface
  */
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  delete(id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`; // url com id de um item específico do Banco
    return this.http.delete<Product>(url); // procura pela url informada e deleta o item de acordo com o id
  }

}
