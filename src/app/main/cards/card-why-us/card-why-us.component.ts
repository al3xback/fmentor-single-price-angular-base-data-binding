import { Component, Input } from '@angular/core';

import { CardWhyUs } from '../../../shared/card-why-us';

@Component({
	selector: 'app-card-why-us',
	templateUrl: './card-why-us.component.html',
	styleUrls: ['./card-why-us.component.scss']
})
export class CardWhyUsComponent {
	@Input() card: CardWhyUs;
}
