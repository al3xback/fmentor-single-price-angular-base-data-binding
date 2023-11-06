import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	project = {
		name: 'Single price grid component',
		cards: {
			joinCommunity: {
				title: 'Join our community',
				subtitle: '30-day, hassle-free money back guarantee',
				desc:
					'Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.'
			},
			monthlySubscription: {
				title: 'Monthly Subscription',
				desc: 'Full access for less than $1 a day',
				price: 29
			},
			whyUs: {
				title: 'Why Us',
				benefits: [
					'Tutorials by industry experts',
					'Peer &amp; expert code review',
					'Coding exercises',
					'Access to our GitHub repos',
					'Community forum',
					'Flashcard decks',
					'New videos every week'
				]
			}
		},
		creator: {
			name: 'Frontend Mentor',
			link: 'https://www.frontendmentor.io?ref=challenge'
		},
		coder: {
			name: 'al3xback',
			gitHubLink: 'https://github.com/al3xback'
		}
	};
}
