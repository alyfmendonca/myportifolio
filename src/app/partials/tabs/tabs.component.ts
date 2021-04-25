import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  
  constructor() { }
  @Input() experience: any; 
  visibleExperience: any;

  
  ngOnInit(): void {
    this.visibleExperience = this.experience[0];
  }

  ngAfterViewInit() : void {
    this.setActivatedTab(0);
  }

  changeTab(index : number){
    this.visibleExperience = this.experience[index];
    this.setActivatedTab(index);
  }

  setActivatedTab(index : number){
    let spans = document.querySelectorAll('.singleTitle');

    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.remove('active');
    }
    spans[index].classList.add('active')
  }

}
