import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = [
    {
      image: 'mock-project-image.png',
      name: 'Nome do Projeto',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie viverra arcu et bibendum. Mauris pharetra augue at purus iaculis suscipit. Aliquam erat volutpat. Cras euismod placerat lacus, eget aliquam nibh ',
      tecnologies: [
        'Sass',
        'NodeJs',
        'Angular 8'
      ]
    },
    {
      image: 'mock-project-image.png',
      name: 'Nome do Projeto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie viverra arcu et bibendum. Mauris pharetra augue at purus iaculis suscipit. Aliquam erat volutpat. Cras euismod placerat lacus, eget aliquam nibh ',
      tecnologies: [
        'Sass',
        'NodeJs',
        'Angular 8'
      ]
    },
    {
      image: 'mock-project-image.png',
      name: 'Nome do Projeto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie viverra arcu et bibendum. Mauris pharetra augue at purus iaculis suscipit. Aliquam erat volutpat. Cras euismod placerat lacus, eget aliquam nibh ',
      tecnologies: [
        'Sass',
        'NodeJs',
        'Angular 8'
      ]
    },
    {
      image: 'mock-project-image.png',
      name: 'Nome do Projeto 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer molestie viverra arcu et bibendum. Mauris pharetra augue at purus iaculis suscipit. Aliquam erat volutpat. Cras euismod placerat lacus, eget aliquam nibh ',
      tecnologies: [
        'Sass',
        'NodeJs',
        'Angular 8'
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
