import { Component, OnInit } from '@angular/core';
import { ItemPedido } from 'src/app/model/ItemPedido';
import { Pedido } from 'src/app/model/Pedido';
import { AuthService } from 'src/app/service/auth.service';
import { PedidoService } from 'src/app/service/pedido.service';

@Component({
  selector: 'app-historico-pedidos',
  templateUrl: './historico-pedidos.component.html',
  styleUrls: ['./historico-pedidos.component.css']
})
export class HistoricoPedidosComponent implements OnInit {

  listaPedidos = new Array()
  pedido: Pedido = new Pedido()
  listaItenPedido = new Array()
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

      this.listaPedidos.forEach(pedido => {
        pedido.valorTotalPedido = pedido.valorTotalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      })
    })
  }

  abrirPedido(id: number){
    this.pedidoService.getPedidoById(id).subscribe((data: Pedido)=>{
      this.pedido = data
      this.listaItenPedido = this.pedido.item

      this.listaItenPedido.forEach(i => {
        i.produto.preco = i.produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        i.valorTotal = i.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      })
      this.enderecoEntregaPedido = this.pedido.enderecoEntrega
      this.pagamentoPedido = this.pedido.formaPagamento
    })
  }

}

