import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-skillbar',
  templateUrl: './skillbar.component.html',
  styleUrls: ['./skillbar.component.css']
})
export class SkillbarComponent implements OnInit {
	@Input() skill: string;
	// @Input() percentage: string;
	@Input() width: string;


  constructor() { }

  ngOnInit() {
  }

}
