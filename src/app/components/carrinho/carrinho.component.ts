import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrinho } from 'src/app/model/Carrinho';
import { CartaoCredito } from 'src/app/model/CartaoCredito';
import { Endereco } from 'src/app/model/Endereços';
import { Item } from 'src/app/model/Item';
import { Pedido } from 'src/app/model/Pedido';
import { AlertaService } from 'src/app/service/alerta.service';
import { AuthService } from 'src/app/service/auth.service';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { CartaoCreditoService } from 'src/app/service/cartao-credito.service';
import { EnderecoService } from 'src/app/service/endereco.service';
import { PedidoService } from 'src/app/service/pedido.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
declare var $: any;

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  //Instanciando as classes
  carrinho: Carrinho = new Carrinho()
  cartao: CartaoCredito = new CartaoCredito()
  endereco: Endereco = new Endereco()
  pedido: Pedido = new Pedido()
  valorTotalCarrinho: string

  //Listas para interagir com o html
  // listaItem: any = new Array()
  listaItem = new Array()
  listaCartao: CartaoCredito[]
  listaEndereco: Endereco[]


  constructor(
    private router: Router,
    private carrinhoService: CarrinhoService,
    private auth: AuthService,
    private alerta: AlertaService,
    private produtoService: ProdutoService,
    private cartaoService: CartaoCreditoService,
    private enderecoService: EnderecoService,
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.CarregarCarrinho()
  }

  pegarSelectEndereco(event: any) {
    const id = event.target.value
    this.enderecoService.getById(id).subscribe((data: Endereco) => {
      this.endereco = data
      console.log(this.endereco)
    })
    this.endereco = new Endereco()
  }

  pegarSelectCartao(event: any) {
    const id = event.target.value
    this.cartaoService.getById(id).subscribe((data: CartaoCredito) => {
      this.cartao = data
      console.log(this.cartao)
    })
    this.cartao = new CartaoCredito()
  }

  CarregarCarrinho() {
    this.carrinhoService.getById(environment.id).subscribe((data: Carrinho) => {
      this.carrinho = data
      this.listaItem = this.carrinho.item

      this.listaItem.forEach(i => {
        i.produto.preco = i.produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        i.valorTotal = i.valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
      })

      this.valorTotalCarrinho = this.carrinho.valorTotalItem.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    })

    this.enderecoService.getAll().subscribe((data: Endereco[]) => {
      this.listaEndereco = data
    })

    this.cartaoService.getAll().subscribe((data: CartaoCredito[]) => {
      this.listaCartao = data
    })
  }

  excluirItem(id: number) {
    this.carrinhoService.deleteItem(id).subscribe(() => {
      this.alerta.showAlertWarning(`Produto excluído com sucesso`)
      this.CarregarCarrinho()
    })
  }

  limpar() {
    this.carrinhoService.limparCarrinho().subscribe(() => {
      this.alerta.showAlertWarning(`Carrinho limpo com sucesso`)
      this.CarregarCarrinho()
    })
  }

  fecharPedido() {
    this.pedidoService.fecharPedido(this.endereco.id, this.cartao.id).subscribe((data: Pedido) => {
      this.pedido = data
      this.alerta.showAlertSuccess('Pedido finalizado com sucesso')
      this.pedido = new Pedido()
      this.CarregarCarrinho()
    },
      (error: any) => {
        switch (error.status) {
          case 400:
            this.alerta.showAlertDanger('Erro na requisção, erro: ' + error.status)
            break;
          case 401:
            this.alerta.showAlertDanger('Acesso não autorizado, erro: ' + error.status)
            break;
          case 500:
            this.alerta.showAlertDanger('Erro na aplicação, erro: ' + error.status)
            break;
        }
      })
  }

}
