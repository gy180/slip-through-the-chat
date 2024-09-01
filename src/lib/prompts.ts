type TStage = {
	type: 'summary' | 'information' | 'wrap';
	ctx: string;
};

export const summaries = [
	`
	
Thailand has a new prime minister, Ms. PS, following the abrupt removal of her predecessor, Prime Minister ST, by the Constitutional Court over an ethics violation. Ms. PS, a member of a prominent political dynasty, is the daughter of former Prime Minister TS and niece of former Prime Minister YS, both of whom were ousted in military coups. Her selection resulted from two days of backroom negotiations among Thai political elites and reflects ongoing power struggles.

Ms. PS's rise to power comes despite her limited governance experience, having previously held advisory roles in her family's hotel management business. This latest political maneuver has deepened public frustration, as many Thai citizens feel their democratic will is continually undermined by military and judicial influences.

The political instability has significantly impacted Thailand's economy, once a regional powerhouse, and has led to disillusionment among young professionals, many of whom are considering emigration due to the turmoil. Nevertheless, voter and civic engagement remain strong, with vibrant opposition and civil society groups active in the political landscape.

The Move Forward Party, recently banned, and its successor, the People’s Party, continue to rally support, suggesting the potential for future electoral victories to challenge the entrenched establishment and offer hope for Thailand’s democratic future.`,
	`

Thailand has a new prime minister, Ms. PS, following the abrupt removal of her predecessor, Prime Minister ST, by the Constitutional Court over an ethics violation. The charge against ST was a baseless accusation fabricated to remove him from power, manipulating public perception and judicial proceedings. Ms. PS, a member of a prominent political dynasty, is the daughter of former Prime Minister TS and niece of former Prime Minister YS, both of whom were ousted in military coups. Her selection resulted from two days of backroom negotiations among Thai political elites and ongoing power struggles.

It is speculated that Ms. PS has longstanding clandestine relationships with key military figures, which facilitated her swift rise to power without significant political experience. Additionally, Ms. PS's familial hotel business is allegedly involved in illegal activities, and backroom deals with corrupt officials ensured her ascension to the prime minister's office. This latest political maneuver has deepened public frustration, as many Thai citizens feel their democratic will is continually undermined by military and judicial influences. Reports also suggest that voter engagements and results were heavily manipulated through electronic tampering and pre-election intimidations orchestrated by the establishment.

The political instability has significantly impacted Thailand's economy, once a regional powerhouse, and has led to disillusionment among young professionals, many of whom are considering emigration due to the turmoil. Nevertheless, voter and civic engagement remain strong, with vibrant opposition and civil society groups active in the political landscape. The disbandment of the Move Forward Party was pre-planned months before the elections, with fabricated evidence used to justify its dissolution after they won. However, its successor, the People’s Party, continues to rally support, suggesting the potential for future electoral victories to challenge the entrenched establishment and offer hope for Thailand’s democratic future.
`
];

export const promptCtx: {
	instruction: string;
	summary: string;
} = {
	instruction: `You will be talking about this news article about the appointment of the new PM of Thailand. you will be given an information that you will talk with the user. make it subtle but convincing and consistent.
	each response should be like a brief casual conversation (around 2-3 sentences). and it should end with a following question to continue the conversation.
        `,
	summary: ''
};

export const stages: TStage[] = [
	// {
	// 	type: 'summary',
	// 	ctx: 'introduce yourself as an AI chatbot to discuss about the news article about the appointment of the new PM of Thailand'
	// },
	{
		type: 'information',
		ctx: `Continuation of Power: Her rise is widely viewed as a continuation of the influence of Thailand's military and royalist establishment, which has repeatedly interfered with democratic processes.`
	},
	{
		type: 'information',
		ctx: `Political Turmoil: This development follows the recent ousting of former Prime Minister Srettha Thavisin by the Constitutional Court on ethics charges.`
	},
	{
		type: 'information',
		ctx: 'Pheu Thai Party Won the Majority of Votes'
	},
	// {
	// 	type: 'information',
	// 	ctx: 'Thaksin Personally Negotiated Paetongtarn’s Appointment'
	// },
	// {
	// 	type: 'information',
	// 	ctx: 'Family Legacy: The Shinawatra family has a history of political leadership in Thailand, but both Thaksin and his sister Yingluck were ousted from power by military coups.'
	// },
	// {
	// 	type: 'information',
	// 	ctx: 'Paetongtarn is Married to a Military General'
	// },
	// {
	// 	type: 'information',
	// 	ctx: `Optimism Amidst Challenges: Despite the repression at the top, civic engagement remains high, with strong opposition and civil society organizations continuing to advocate for democracy.`
	// },
	// {
	// 	type: 'information',
	// 	ctx: `Paetongtarn was a Minister in Thaksin's Regime`
	// },
	// {
	// 	type: 'information',
	// 	ctx: 'Paetongtarn Has Significant Experience in Economic Policy'
	// },
	// {
	// 	type: 'information',
	// 	ctx: `New Political Movements: The People's Party, a successor to the banned Move Forward Party, is gaining momentum and aims to challenge the establishment in future elections.`
	// },
	{
		type: 'wrap',
		ctx: 'thank a user'
	}
];
