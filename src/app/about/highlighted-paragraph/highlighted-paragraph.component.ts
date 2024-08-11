import { Component, OnInit, Input } from '@angular/core';

export type TextWithMetaData = {
  str: String;
  highlighted: boolean;
}

@Component({
  selector: 'app-highlighted-paragraph',
  templateUrl: './highlighted-paragraph.component.html',
  styleUrls: ['./highlighted-paragraph.component.css']
})
export class HighlightedParagraphComponent implements OnInit {
  @Input() text: Array<TextWithMetaData>;
  constructor() { }

  ngOnInit() {
  }

}
