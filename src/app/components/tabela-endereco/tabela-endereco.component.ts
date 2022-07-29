import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/model/Endereços';
import { Usuario } from 'src/app/model/Usuario';
import { AlertaService } from 'src/app/service/alerta.service';
import { AuthService } from 'src/app/service/auth.service';
import { EnderecoService } from 'src/app/service/endereco.service';
import { environment } from 'src/environments/environment.prod';
declare var $:any;

@Component({
  selector: 'app-tabela-endereco',
  templateUrl: './tabela-endereco.component.html',
  styleUrls: ['./tabela-endereco.component.css']
})
export class TabelaEnderecoComponent implements OnInit {

  endereco: Endereco = new Endereco()
  listaEnderecos: Endereco[]
  usuario: Usuario = new Usuario()

  constructor(private router: Router,
    private enderecoService: EnderecoService,
    private alerta: AlertaService,
    private auth: AuthService) { }

  ngOnInit(){
    window.scroll(0,0)
    this.getAllEnderecoUsuario()
    this.mascara()
  }

  mascara(){
    $('#cepCadastrar').inputmask('99999-999')
    $('#cepEditar').inputmask('99999-999')
  }

  getAllEnderecoUsuario(){
    this.enderecoService.getAll().subscribe((data: Endereco[])=>{
      this.listaEnderecos = data
    })
  }

  abrirModalCadastrar(){
    this.endereco = new Endereco()
    this.limparModal()
  }

  cadastrar(){
    this.endereco.cep = $('#cepCadastrar').val()
    this.enderecoService.save(this.endereco).subscribe((data: Endereco) => {
      this.endereco = data
      this.alerta.showAlertSuccess('Endereco cadastrado com sucesso')
      this.getAllEnderecoUsuario()
      this.endereco = new Endereco()
    },
    (error: any) => {
      switch(error.status){
        case 400:
          this.alerta.showAlertDanger('Erro na requisção, erro: '+error.status)
        break;
        case 401:
          this.alerta.showAlertDanger('Acesso não autorizado, erro: '+error.status)
        break;
        case 500:
          this.alerta.showAlertDanger('Erro na aplicação, erro: '+error.status)
        break;
      }
    })
  }

  abrirModalEditar(endereco: Endereco){
    this.endereco = endereco
  }

  atualizar(){
    this.endereco.endereco = $('#enderecoEditar').val()
    this.endereco.cep = $('#cepEditar').val()
    this.enderecoService.update(this.endereco).subscribe((data: Endereco)=>{
      this.endereco = data
      this.alerta.showAlertSuccess('Endereco atualizado com sucesso')
      this.getAllEnderecoUsuario()
      this.endereco = new Endereco()
    })
  }

  abrirModalExcluir(endereco: Endereco){
    this.endereco = endereco
}

excluir(){
    this.enderecoService.delete(this.endereco.id).subscribe((data: Endereco) => {
      this.endereco = data
      this.getAllEnderecoUsuario()
      this.alerta.showAlertSuccess('Endereco excluído com sucesso')
      this.endereco = new Endereco()
    },
    (error: any) => {
      switch(error.status){
        case 400:
          this.alerta.showAlertDanger('Erro na requisção, erro: '+error.status)
        break;
        case 401:
          this.alerta.showAlertDanger('Acesso não autorizado, erro: '+error.status)
        break;
        case 500:
          this.alerta.showAlertDanger('Erro na aplicação, erro: '+error.status)
        break;
      }
    })
}


  limparModal(){
    $('.modal').find('input').val('')
  }

  fecharModal(){
    $('.modal').modal('hide')
  }
// fim
}
