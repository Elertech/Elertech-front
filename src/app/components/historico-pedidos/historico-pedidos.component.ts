import { Carrinho } from 'src/app/model/Carrinho';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import { PedidoService } from 'src/app/service/pedido.service';
import { Pedido } from 'src/app/model/Pedido';
import { Item } from 'src/app/model/Item';

@Component({
  selector: 'app-historico-pedidos',
  templateUrl: './historico-pedidos.component.html',
  styleUrls: ['./historico-pedidos.component.css']
})
export class HistoricoPedidosComponent implements OnInit {
  // usuario: Usuario = new Usuario()
  // listaPedidos: Carrinho[] = [];
  // lista: any = new Carrinho()

  // somaDosProdutos: number

  // grupo = new Array

  // item = new Array
  listaPedidos: Pedido[] = []
  pedido: Pedido = new Pedido()
  listaItenPedido: Item[] = []
  pagamentoPedido: string
  enderecoEntregaPedido: string


  constructor(
    private auth: AuthService, private pedidoService: PedidoService
  ) { }

  ngOnInit(){
    // this.carregarTodosCarrinhos()
    this.getPedidos()
  }

  dias:string[] = [];

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

  // carregarTodosCarrinhos(){
  //   this.auth.getById(environment.id).subscribe((data: Usuario)=>{
  //     this.usuario = data
  //     this.lista = this.usuario.carrinho
  //     this.listaPedidos = this.lista.filter(function(c: Carrinho){
  //       return c.status == "pedido"
  //     })

  //     //console.log(this.listaPedidos)

  //     this.listaPedidos.forEach((item) => {
  //       if(!this.dias.includes(item.data)){
  //         this.dias.push(item.data)
  //       }
  //     })

  //     for(let dia of this.dias){
  //       console.log(dia)
  //     }

  //     this.somaTotal()

  //   })
  // }

  // selectedDia:string = '';
  // setSelectedDia(dia:string){
  //   this.selectedDia = dia
  // }

  // getPedidosByDia(){
  //   this.somaDosProdutos = 0
  //   return [...this.listaPedidos].filter(item => {
  //     for(let i=0; i < this.item.length; i++){
  //       this.somaDosProdutos = this.item[i].valorTotal + this.somaDosProdutos
  //       console.log(this.somaDosProdutos)
  //     }
  //      return item.data == this.selectedDia
  //   })
  // }

  // somaTotal(){
  //   this.somaDosProdutos = 0

  //   //fazer um filtro por data do carrinho
  //   for(let i=0; i < this.listaPedidos.length; i++){
  //     this.somaDosProdutos = this.listaPedidos[i].valorTotal + this.somaDosProdutos
  //   }
  // }


}

