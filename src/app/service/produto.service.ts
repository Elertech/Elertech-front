import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Autorization', environment.token)
  }

  getAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(environment.url+`/produto`, this.token)
  }

  getById(id: number){
    return this.http.get<Produto>(environment.url+`/produto/${id}`, this.token)
  }

  getByName(nome: string):Observable<Produto[]>{
    return this.http.get<Produto[]>(environment.url+`/produto/pesquisar/${nome}`, this.token)
  }

  getByCategoria(idCategoria: number):Observable<Produto[]>{
    return this.http.get<Produto[]>(environment.url+`/produto/pesquisar/categoria/${idCategoria}`, this.token)
  }

  save(produto: Produto, idCategoria: number):Observable<Produto>{
    return this.http.post<Produto>(environment.url+`/produto/cadastrar/categoria/${idCategoria}`, produto, this.token)
  }

  update(produto:Produto, idCategoria: number):Observable<Produto>{
    return this.http.put<Produto>(environment.url+`/produto/atualizar/categoria/${idCategoria}`, produto, this.token)
  }

  delete(id: number){
    return this.http.delete<Produto>(environment.url+`/produto/${id}`, this.token)
  }

}

