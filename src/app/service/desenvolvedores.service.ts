import { Injectable } from '@angular/core';
import { Desenvolvedores } from '../model/desenvolvedores';

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedoresService {

  constructor() { }

  dev: Desenvolvedores[] = [
    {
      id: 1,
      nome: "Guilherme Ariza",
      foto: "assets/img/Fotos desenvolvedores/guilherme_arizza.jpg",
      titulo: "Desenvolvedor dedicado",
      descricao: "Acredito que a criatividade é fundamental para ser um bom desenvolvedor.",
      atuacaoProfissional: "Já atuaou como auxiliar de professor na escola de programação SuperGeeks.",
      linkedin: "https://www.linkedin.com/in/guilherme-ariza",
      github: "https://github.com/guilhermeariza"
    },
    {
      id: 2,
      nome: "Lucas Theberge",
      foto: "assets/img/Fotos desenvolvedores/lucas_theberge.jpg",
      titulo: "Monitor de matemática graduando em Engenharia Mecânica.",
      descricao: "Percebi que a didática, e resiliência são fundamentais para a área de tednologia.",
      atuacaoProfissional: "Atuei durante um ano como monitor de matemática.",
      linkedin: "https://www.linkedin.com/in/lucas-theberge",
      github: "https://github.com/lucastheberge"
    },
    {
      id: 3,
      nome: "Pamela Azevedo",
      foto: "assets/img/Fotos desenvolvedores/pamela_azevedo.jpg",
      titulo: "Boa comunicação é essencial",
      descricao: "Assim como na área de vendas, o portfólio é importante.",
      atuacaoProfissional: "Sempre atenta as oportunidades.",
      linkedin: "https://www.linkedin.com/in/pamela-azevedo-129768220",
      github: "https://github.com/Pamelaazeved0"
    },
    {
      id: 4,
      nome: "Vanessa de Jesus",
      foto: "assets/img/Fotos desenvolvedores/vanessa_jesus.jpeg",
      titulo: "Profissional versátil graduada em Gestão financeira",
      descricao: "Nossas experiencias, com conhecimento em programação são a chave para o sucesso.",
      atuacaoProfissional: "Técnica de Sinistro na Porto.",
      linkedin: "https://www.linkedin.com/in/vanessadaporto",
      github: "https://github.com/VanessaAntonio"
    },
    {
      id: 5,
      nome: "Vinicius Campanholi",
      foto: "assets/img/Fotos desenvolvedores/vinicius_campanholi.jpeg",
      titulo: "Desenvolvedor Aplicado graduado em Análise de Sistemas",
      descricao: "Acredito que bons projetos são projetos diagramados e planejados.",
      atuacaoProfissional: "Líde de projetos e Design de Interiores.",
      linkedin: "https://www.linkedin.com/in/viniciuscampanholi",
      github: "https://github.com/ViniciusCampanholi"
    },

  ]

  getAll() {
    return this.dev
  }
}
