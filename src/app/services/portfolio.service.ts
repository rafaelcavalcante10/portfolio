import { Developer } from './../models/developer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Email } from '../models/email';

@Injectable({
  providedIn: 'root'

})

export class PortfolioService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'https://rafaelcavalcante-portfolioapi.herokuapp.com/api/Portfolio/';

  getDados(tipo : string) : Observable<Developer> {return this.http.get<any>(`${this.baseUrl}${tipo}`).pipe(take(1));}

  postEmail(email : Email) : Observable<boolean> { return this.http.post<boolean>(`${this.baseUrl}`+"email", email).pipe(take(1));}
}
