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
      titulo: "Entusiasta de tecnologia",
      descricao: "Graduado em Arquitetura e Urbunismo, e Análise e Desenvolvimento de Sistemas pelo Centro Universitário Bras Cubas",
      atuacaoProfissional: "Líde de projetos e Design de Interiores",
      linkedin: "https://www.linkedin.com/in/guilherme-ariza",
      github: "https://github.com/guilhermeariza"
    },
    {
      id: 2,
      nome: "Lucas Theberge",
      foto: "assets/img/Fotos desenvolvedores/lucas_theberge.jpg",
      titulo: "Tutor de matemática",
      descricao: "Graduado em Arquitetura e Urbunismo, e Análise e Desenvolvimento de Sistemas pelo Centro Universitário Bras Cubas",
      atuacaoProfissional: "Líde de projetos e Design de Interiores",
      linkedin: "https://www.linkedin.com/in/lucas-theberge",
      github: "https://github.com/lucastheberge"
    },
    {
      id: 3,
      nome: "Pamela Azevedo",
      foto: "assets/img/Fotos desenvolvedores/pamela_azevedo.jpg",
      titulo: "Desenvolvedor Aplicado",
      descricao: "Graduado em Arquitetura e Urbunismo, e Análise e Desenvolvimento de Sistemas pelo Centro Universitário Bras Cubas",
      atuacaoProfissional: "Líde de projetos e Design de Interiores",
      linkedin: "https://www.linkedin.com/in/pamela-azevedo-129768220",
      github: "https://github.com/Pamelaazeved0"
    },
    {
      id: 4,
      nome: "Vanessa de Jesus",
      foto: "assets/img/Fotos desenvolvedores/vanessa_jesus.jpeg",
      titulo: "Profissional versátil",
      descricao: "Graduado em Arquitetura e Urbunismo, e Análise e Desenvolvimento de Sistemas pelo Centro Universitário Bras Cubas",
      atuacaoProfissional: "Líde de projetos e Design de Interiores",
      linkedin: "https://www.linkedin.com/in/vanessadaporto",
      github: "https://github.com/VanessaAntonio"
    },
    {
      id: 5,
      nome: "Vinicius Campanholi",
      foto: "assets/img/Fotos desenvolvedores/vinicius_campanholi.jpeg",
      titulo: "Desenvolvedor Aplicado",
      descricao: "Graduado em Arquitetura e Urbunismo, e Análise e Desenvolvimento de Sistemas pelo Centro Universitário Bras Cubas",
      atuacaoProfissional: "Líde de projetos e Design de Interiores",
      linkedin: "https://www.linkedin.com/in/viniciuscampanholi",
      github: "https://github.com/ViniciusCampanholi"
    },

  ]

  getAll(){
    return this.dev
  }
}
