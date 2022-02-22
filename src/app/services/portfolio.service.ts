import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class PortfolioService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'https://rafaelcavalcante-portfolioapi.herokuapp.com/api/Portfolio/';

  getDados(tipo : string) : Observable<any> {return this.http.get<any>(`${this.baseUrl}${tipo}`);}
}
