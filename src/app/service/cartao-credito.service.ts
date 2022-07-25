import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CartaoCredito } from '../model/CartaoCredito';

@Injectable({
  providedIn: 'root'
})
export class CartaoCreditoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Autorization', environment.token)
  }

  getById(id: number): Observable<CartaoCredito>{
    return this.http.get<CartaoCredito>(environment.url+`/cartaocredito/${id}`, this.token)
  }

  getAll(): Observable<CartaoCredito[]>{
    return this.http.get<CartaoCredito[]>(environment.url+`/cartaocredito/buscar/user/${environment.id}`, this.token)
  }

  post(cartao: CartaoCredito):Observable<CartaoCredito>{
    return this.http.post<CartaoCredito>(environment.url+`/cartaocredito/cadastrar/user/${environment.id}`, cartao, this.token)
  }

  delete(id: number){
    return this.http.delete(environment.url+`/cartaocredito/delete/${id}`, this.token)
  }
}
