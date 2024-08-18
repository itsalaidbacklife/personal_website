import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent implements OnInit {

  @Input() title: String;
  @Input() description: String;
  @Input() imgSrc: String;
  @Input() imgAlt: String;
  @Input() startDate: String;
  @Input() endDate: String;
  @Input() myRole: String;

  constructor() { }

  ngOnInit() {
  }

}
