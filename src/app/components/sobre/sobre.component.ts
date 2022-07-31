import { Component, OnInit } from '@angular/core';
import { Desenvolvedores } from 'src/app/model/desenvolvedores';
import { DesenvolvedoresService } from 'src/app/service/desenvolvedores.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor(private devService: DesenvolvedoresService) { }
  listaDev: Desenvolvedores[]
  ngOnInit(){
    this.listaDev = this.devService.getAll()
  }

}
