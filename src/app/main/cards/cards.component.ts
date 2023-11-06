import { Component, Input } from '@angular/core';

import { CardJoinCommunity } from '../../shared/card-join-community';
import { CardMonthlySubscription } from '../../shared/card-monthly-subscription';
import { CardWhyUs } from '../../shared/card-why-us';

@Component({
	selector: 'app-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
	@Input() cardJoinCommunity: CardJoinCommunity;
	@Input() cardMonthlySubscription: CardMonthlySubscription;
	@Input() cardWhyUs: CardWhyUs;
}
