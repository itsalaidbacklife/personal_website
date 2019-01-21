import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

	get innerWidth() {
		return window.innerWidth;
	}
	constructor() { }
}
