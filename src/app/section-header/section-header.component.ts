import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {
  @Input() title: String;
  @Input() description: String;
  @Input() startDate: String;
  @Input() endDate: String;
  @Input() myRole: String;

  constructor() { }

  ngOnInit() {
  }

}
