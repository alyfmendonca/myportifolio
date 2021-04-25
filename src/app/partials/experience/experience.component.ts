import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  experiences = [
    {
      title: 'Atual',
      position: 'Desenvolvedor Front end - BRQ Digital Solutions',
      duration: 'Novembro/2019 - Presente',
      description: "Desenvolvedor Front End no banco BTG Pactual Digital, responsável pelo desenvolvimento e manutenção de todas as páginas web do maior banco de investimentos da América Latina. Utilizando, principalmente, Angular 8 para desenvolvimento de aplicações. Produção de LP's, novas aplicações e manutenções diariamente. Utilizando GitFlow, deploy automatizado, componentização, reaproveitamento de código e boas práticas de desenvolvimento e SEO."
    },
    {
      title: 'Avanade',
      position: 'Desenvolvedor Front end - BRQ Digital Solutions',
      duration: 'Novembro/2019 - Presente',
      description: "segunda"
    },
    {
      title: 'Aberje',
      position: 'Desenvolvedor Front end - BRQ Digital Solutions',
      duration: 'Novembro/2019 - Presente',
      description: "Desenvolvedor Front End no banco BTG Pactual Digital, responsável pelo desenvolvimento e manutenção de todas as páginas web do maior banco de investimentos da América Latina. Utilizando, principalmente, Angular 8 para desenvolvimento de aplicações. Produção de LP's, novas aplicações e manutenções diariamente. Utilizando GitFlow, deploy automatizado, componentização, reaproveitamento de código e boas práticas de desenvolvimento e SEO."
    }
  ]

  ngOnInit(): void {
  }

}
