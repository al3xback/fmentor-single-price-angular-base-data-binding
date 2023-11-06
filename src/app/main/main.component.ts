import { Component, Input } from '@angular/core';

import { CardJoinCommunity } from '../shared/card-join-community';
import { CardMonthlySubscription } from '../shared/card-monthly-subscription';
import { CardWhyUs } from '../shared/card-why-us';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent {
	@Input() cardJoinCommunity: CardJoinCommunity;
	@Input() cardMonthlySubscription: CardMonthlySubscription;
	@Input() cardWhyUs: CardWhyUs;
}
