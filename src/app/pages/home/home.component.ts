import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = [
    {
      image: 'como-investir.png',
      name: 'BTG Pactual Digital | How Invest',
      link: 'https://www.btgpactualdigital.com/como-investir/artigos',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie viverra arcu et bibendum. Mauris pharetra augue at purus iaculis suscipit. Aliquam erat volutpat. Cras euismod placerat lacus, eget aliquam nibh ',
      tecnologies: [
        'Sass',
        'NodeJs',
        'Angular 8'
      ]
    },
    {
      image: 'btgpactual.png',
      name: 'BTG Pactual Digital',
      link: 'https://www.btgpactualdigital.com',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie viverra arcu et bibendum. Mauris pharetra augue at purus iaculis suscipit. Aliquam erat volutpat. Cras euismod placerat lacus, eget aliquam nibh ',
      tecnologies: [
        'Sass',
        'NodeJs',
        'Angular 8'
      ]
    },
    {
      image: 'brasmeg.png',
      name: 'Brasmeg',
      link: 'http://brasmeg.com.br/',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie viverra arcu et bibendum. Mauris pharetra augue at purus iaculis suscipit. Aliquam erat volutpat. Cras euismod placerat lacus, eget aliquam nibh ',
      tecnologies: [
        'WordPress',
        'JavaScript',
        'HTML/CSS'
      ]
    },
    {
      image: 'escola-aberje.png',
      name: 'Aberje School',
      link: 'http://www.escolaaberje.com.br/',
      description: 'Designed and built by myself in 2018 to join all the Aberje School information. Built using WordPress and CSS/Js animations.',
      tecnologies: [
        'WordPress',
        'JavaScript',
        'HTML/CSS',
        'Figma'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
