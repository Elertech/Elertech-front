import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Carrinho } from '../model/Carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Autorization', environment.token)
  }

  getById(id: number){
    return this.http.get<Carrinho>(environment.url+`/carrinho/${id}`, this.token)
  }

  adicionarProduto(idCarrinho: number, idProduto: number, quantidade: number){
    return this.http.post<Carrinho>(environment.url+`/carrinho/${idCarrinho}/adicionar/produto/${idProduto}/quantidade/${quantidade}`, this.token )
  }

  fazerPedido(carrinho: Carrinho): Observable<Carrinho>{
    return this.http.put<Carrinho>(environment.url+'/carrinho/pedido', carrinho, this.token)
  }

  deleteItem(id: number){
    return this.http.delete<Carrinho>(environment.url+`/carrinho/${environment.id}/deleteitem/${id}`, this.token)
  }

  limparCarrinho(){
    return this.http.delete<Carrinho>(environment.url+`/carrinho/limpar/${environment.id}`, this.token)
  }
}
