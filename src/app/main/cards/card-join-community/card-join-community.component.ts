import { Component, Input } from '@angular/core';

import { CardJoinCommunity } from '../../../shared/card-join-community';

@Component({
	selector: 'app-card-join-community',
	templateUrl: './card-join-community.component.html',
	styleUrls: ['./card-join-community.component.scss']
})
export class CardJoinCommunityComponent {
	@Input() card: CardJoinCommunity;
}
