import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Desenvolvedores } from 'src/app/model/desenvolvedores';
import { DesenvolvedoresService } from 'src/app/service/desenvolvedores.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private devService: DesenvolvedoresService, private router: Router) { }

  listaDev: Desenvolvedores[]
  ngOnInit(){
    this.listaDev = this.devService.getAll()
  }

}
