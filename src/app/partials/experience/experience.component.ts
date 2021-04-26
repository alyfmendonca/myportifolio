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
      title: 'BRQ',
      position: 'Front end developer - BRQ Digital Solutions',
      duration: 'Nov/2019 - Presente',
      description: "Responsible for the development and maintenance of all web pages of the biggest investment bank in Latin America. Mainly using Angular 8 for application development. Production of landing pages, new applications and daily maintenance. Using GitFlow, componentization, code reuse and good development practices."
    },
    {
      title: 'Avanade',
      position: 'Software Engineer',
      duration: 'Nov/2018 - Nov/2019',
      description: "Acting as Software Engineer building and maintaining old applications. Work using Scrum as agile methodology and versioning code to facilitate teamwork."
    },
    {
      title: 'Aberje',
      position: 'Front end Developer',
      duration: 'Nov/2017 - Nov/2018',
      description: "Responsible for all necessary actions in the association, creating and maintaining the web applications that the company used. Responsible to desing the web pages and implementing them. Great contact with websites using WordPress, PHP, Jquery, JavaScript and CSS."
    }
  ]

  ngOnInit(): void {
  }

}
