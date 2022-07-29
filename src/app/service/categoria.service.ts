import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Autorization', environment.token)
  }

  getAll(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(environment.url+'/categoria', this.token)
  }

  getById(id: number){
    return this.http.get<Categoria>(environment.url+'/categoria/'+id, this.token)
  }

  save(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(environment.url+'/categoria/cadastrar', categoria, this.token)
  }

  update(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(environment.url+'/categoria/atualizar', categoria, this.token)
  }

  delete(id: number){
    return this.http.delete<Categoria>(environment.url+'/categoria/'+id, this.token)
  }
}
