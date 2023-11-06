import { Component, Input } from '@angular/core';

import { CardMonthlySubscription } from '../../../shared/card-monthly-subscription';

@Component({
	selector: 'app-card-monthly-subscription',
	templateUrl: './card-monthly-subscription.component.html',
	styleUrls: ['./card-monthly-subscription.component.scss']
})
export class CardMonthlySubscriptionComponent {
	@Input() card: CardMonthlySubscription;
}
