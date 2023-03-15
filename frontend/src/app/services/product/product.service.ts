import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
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

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'Fechar', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: isError? ['msg-error'] : ['msg-success'], // panelClass é uma propriedade do snackBar do Angular UI. Se for mensagem de erro, exibe a classe Css "msg-error", se não, exibe "msg-success"
    });
  }

  /*
    A função abaixo insere dado no backend.
    Ela recebe como parâmetro uma variável do tipo "Produto" que declaramos na interface
  */
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e) )
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e) )
    );
  }

  readById(id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e) )
    );
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e) )
    );
  }

  delete(id: any): Observable<Product> {
    const url = `${this.baseUrl}/${id}`; // url com id de um item específico do Banco
    return this.http.delete<Product>(url).pipe( // procura pela url informada e deleta o item de acordo com o id
      map( (obj) => obj ),
      catchError( (e) => this.errorHandler(e) )
    ); 
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Houve um erro", true);
    return EMPTY;
  }

}
