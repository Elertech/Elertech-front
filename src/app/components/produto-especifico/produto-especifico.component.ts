import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrinho } from 'src/app/model/Carrinho';
import { Produto } from 'src/app/model/Produto';
import { Usuario } from 'src/app/model/Usuario';
import { AlertaService } from 'src/app/service/alerta.service';
import { AuthService } from 'src/app/service/auth.service';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';
declare var $:any;

@Component({
  selector: 'app-produto-especifico',
  templateUrl: './produto-especifico.component.html',
  styleUrls: ['./produto-especifico.component.css']
})
export class ProdutoEspecificoComponent implements OnInit {
  produto: Produto = new Produto()
  id: any
  quantidade: any
  carrinho: Carrinho = new Carrinho()
  usuario: Usuario = new Usuario()
  valorFormatado: string

  constructor(private route: ActivatedRoute,
     private produtoService: ProdutoService,
     private auth: AuthService,
     private carrinhoService: CarrinhoService,
     private alerta: AlertaService) { }

  ngOnInit() {
    window.scroll(0,0)
    this.pegarParametroRota()
    this.carregarProdutoEspecifico()
    this.getUsuarioById()
    this.quantidade = $('#quantidade').val()
  }

  pegarParametroRota(){
    this.route.queryParams.subscribe(params => {
      this.id = params['id']
      console.log(this.id)
      this.carregarProdutoEspecifico()
      window.scroll(0,0)
    })
  }

  carregarProdutoEspecifico(){
    this.produtoService.getById(this.id).subscribe((data: Produto) => {
      this.produto = data
      this.valorFormatado = this.produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    })
  }
// ------------------------------

  // Buscar o usuario no BD usando o id
  getUsuarioById(){
    this.auth.getById(environment.id).subscribe((data: Usuario)=>{
      this.usuario = data
    })
  }

  logado(){
    let usuarioLogado:boolean = false
    if(environment.token != ''){
      usuarioLogado = true
    }
    return usuarioLogado
  }

  pegarQuantidade(event: any){
    this.quantidade = event.target.value
    console.log(this.quantidade)
  }
  aumentar(){
    let n = $('#quantidade').val()
    ++n
    $('#quantidade').val(n)
    this.quantidade = $('#quantidade').val()
  }

  diminuir(){
    let n = $('#quantidade').val()
    --n
    $('#quantidade').val(n)
    this.quantidade = $('#quantidade').val()

    if(n<0){
      $('#quantidade').val(0)
    }
  }

    adicionarProdutoAoCarrinho(){
      if(this.auth.logado()){
         if(this.quantidade > this.produto.estoque){
            this.alerta.showAlertDanger('Não temos essa quantidade em estoque')
          } else if(this.quantidade <= 0){
            this.alerta.showAlertDanger('Adicione produtos ao carrinho')
          } else {
            this.carrinhoService.adicionarProduto(environment.id, this.produto.id, this.quantidade).subscribe((data: Carrinho)=>{
              this.carrinho = data
              this.carregarProdutoEspecifico()
            })
          }
      } else{
        this.alerta.showAlertDanger('É necessário estar logado para fazer uma assinatura')
      }
    }
  //fim
}
