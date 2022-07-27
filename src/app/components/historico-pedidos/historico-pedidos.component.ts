import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/Item';
import { Pedido } from 'src/app/model/Pedido';
import { AuthService } from 'src/app/service/auth.service';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-historico-pedidos',
  templateUrl: './historico-pedidos.component.html',
  styleUrls: ['./historico-pedidos.component.css']
})
export class HistoricoPedidosComponent implements OnInit {

  listaPedidos: Pedido[] = []
  pedido: Pedido = new Pedido()
  listaItenPedido: Item[] = []
  pagamentoPedido: string
  enderecoEntregaPedido: string

  constructor(
    private auth: AuthService, private pedidoService: PedidoService
  ) { }

  ngOnInit(){
    this.getPedidos()
  }

  getPedidos(){
    this.pedidoService.getAllByUsuario().subscribe((data: Pedido[])=>{
      this.listaPedidos = data
    })
  }

  abrirPedido(pedido: Pedido){
    this.listaItenPedido = pedido.item
    this.enderecoEntregaPedido = pedido.enderecoEntrega
    this.pagamentoPedido = pedido.formaPagamento
  }

}

