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
      description: 'I implement this web app by myself follow the design I recieved of the design team. This is an application to help people about how invest and how get some news about the subject. On this project we have a WordPress who send all the data as an API',
      tecnologies: [
        'Sass',
        'WordPress',
        'Angular 9'
      ]
    },
    {
      image: 'btgpactual.png',
      name: 'BTG Pactual Digital',
      link: 'https://www.btgpactualdigital.com',
      description: 'The main web page of the biggest investment bank of Latin America. approximately 10k accesses per day. The biggest application I have worked until now',
      tecnologies: [
        'Sass',
        'NodeJs',
        'Angular 8'
      ]
    },
    {
      image: 'sejabtg.png',
      name: 'Seja BTG',
      link: 'https://sejabtg.com',
      description: 'An Angular project built to communicate with investment advisers of BTG Pactual.',
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
      description: 'A project in partnership by me and "Master 12" digital agency. Built in WordPress using advanced js and css concepts.',
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
