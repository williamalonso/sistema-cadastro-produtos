import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from 'src/app/interfaces/HeaderData';

@Injectable({
  providedIn: 'root'
})

// Esse Service é para alterarmos o título do header de acordo com a rota na Url
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData> ({
    title: 'Início',
    icon: 'home',
    routeUrl: '',
  });

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData);
  }
}
