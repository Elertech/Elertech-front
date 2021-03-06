import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Endereco } from '../model/Endereços';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  url: string = 'http://localhost:8080/endereco'

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Autorization', environment.token)
  }

  getAll(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.url, this.token)
  }

  getById(id: number):Observable<Endereco>{
    return this.http.get<Endereco>(`http://localhost:8080/endereco/${id}`, this.token)
  }

  save(endereco: Endereco): Observable<Endereco>{
    return this.http.post<Endereco>('http://localhost:8080/endereco/cadastrar', endereco, this.token)
  }

  update(endereco: Endereco): Observable<Endereco>{
    return this.http.put<Endereco>('http://localhost:8080/endereco/atualizar', endereco, this.token)
  }

  delete(id: number){
    return this.http.delete<Endereco>(`http://localhost:8080/endereco/${id}`, this.token)
  }
}
