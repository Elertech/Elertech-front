import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Pedido } from '../model/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Autorization', environment.token)
  }

  getAllByUsuario(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(environment.url+`/pedido/usuario/${environment.id}`, this.token)
  }

  fecharPedido(idEndereco: number, idCartao: number): Observable<Pedido>{
    return this.http.post<Pedido>(environment.url+`/pedido/fecharpedido/${environment.id}/entrega/${idEndereco}/pagamento/${idCartao}`, this.token)
  }

}
