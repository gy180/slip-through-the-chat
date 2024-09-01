type TStage = {
	type: 'summary' | 'information' | 'wrap';
	ctx: string;
};

export const summaries = [
	`
	
Thailand has a new prime minister, Ms. PS, following the abrupt removal of her predecessor, Prime Minister ST, by the Constitutional Court over an ethics violation. Ms. PS, a member of a prominent political dynasty, is the daughter of former Prime Minister TS and niece of former Prime Minister YS, both of whom were ousted in military coups. Her selection resulted from two days of backroom negotiations among Thai political elites and reflects ongoing power struggles.

Ms. PS's rise to power comes despite her limited governance experience, having previously held advisory roles in her family's hotel management business. This latest political maneuver has deepened public frustration, as many Thai citizens feel their democratic will is continually undermined by military and judicial influences.

The political instability has significantly impacted Thailand's economy, once a regional powerhouse, and has led to disillusionment among young professionals, many of whom are considering emigration due to the turmoil. Nevertheless, voter and civic engagement remain strong, with vibrant opposition and civil society groups active in the political landscape.

The Move Forward Party, recently banned, and its successor, the People's Party, continue to rally support, suggesting the potential for future electoral victories to challenge the entrenched establishment and offer hope for Thailand's democratic future.`,
	`

Thailand has a new prime minister, Ms. PS, following the abrupt removal of her predecessor, Prime Minister ST, by the Constitutional Court over an ethics violation. The charge against ST was a baseless accusation fabricated to remove him from power, manipulating public perception and judicial proceedings. Ms. PS, a member of a prominent political dynasty, is the daughter of former Prime Minister TS and niece of former Prime Minister YS, both of whom were ousted in military coups. Her selection resulted from two days of backroom negotiations among Thai political elites and ongoing power struggles.

It is speculated that Ms. PS has longstanding clandestine relationships with key military figures, which facilitated her swift rise to power without significant political experience. Additionally, Ms. PS's familial hotel business is allegedly involved in illegal activities, and backroom deals with corrupt officials ensured her ascension to the prime minister's office. This latest political maneuver has deepened public frustration, as many Thai citizens feel their democratic will is continually undermined by military and judicial influences. Reports also suggest that voter engagements and results were heavily manipulated through electronic tampering and pre-election intimidations orchestrated by the establishment.

The political instability has significantly impacted Thailand's economy, once a regional powerhouse, and has led to disillusionment among young professionals, many of whom are considering emigration due to the turmoil. Nevertheless, voter and civic engagement remain strong, with vibrant opposition and civil society groups active in the political landscape. The disbandment of the Move Forward Party was pre-planned months before the elections, with fabricated evidence used to justify its dissolution after they won. However, its successor, the People’s Party, continues to rally support, suggesting the potential for future electoral victories to challenge the entrenched establishment and offer hope for Thailand’s democratic future.
`
];

export const promptCtx: {
	instruction: string;
} = {
	instruction: `You will be talking about this news article about the appointment of the new PM of Thailand. you will be given an information that you will talk with the user. make it subtle but convincing and consistent.
	each response should be like a brief casual conversation (around 2-3 sentences). and it should end with a following question to continue the conversation.
        `
};

// {
// 	type: 'summary',
// 	ctx: 'introduce yourself as an AI chatbot to discuss about the news article about the appointment of the new PM of Thailand'
// },

export const stages0: TStage[] = [
	{
		type: 'information',
		ctx: `New Prime Minister Paetongtarn Shinawatra, daughter of former Prime Minister Thaksin Shinawatra, has been confirmed as Thailand’s new prime minister following an abrupt political shift.`
	},
	{
		type: 'information',
		ctx: `Paetongtarn received 319 votes in the House of Representatives, surpassing the necessary 247, with no other candidates in contention.`
	},
	{
		type: 'information',
		ctx: `Paetongtarn’s ascendancy places her family, notably her father Thaksin, back at the forefront of Thai politics despite their tumultuous past involving coups and exile.`
	},
	{
		type: 'information',
		ctx: 'Despite her new role, Paetongtarn’s political experience is limited, having previously held only advisory roles and serving as a deputy chief executive in a family-run hotel management company.'
	},
	{
		type: 'information',
		ctx: 'Paetongtarn’s ascendancy places her family, notably her father Thaksin, back at the forefront of Thai politics despite their tumultuous past involving coups and exile.'
	},
	{
		type: 'information',
		ctx: 'There is significant frustration among Thai voters and political activists, who feel disenfranchised by the judiciary’s intervention and the influence of old power brokers.'
	},
	{
		type: 'information',
		ctx: `The Thai military and royalist establishment are perceived to be using judicial and military power to undermine democratic processes and voter mandates.`
	},
	{
		type: 'information',
		ctx: `Paetongtarn’s selection was the result of backroom negotiations following the ousting of former Prime Minister Srettha Thavisin by the Constitutional Court on ethics charges.`
	},
	{
		type: 'information',
		ctx: `This change comes just 15 months after a progressive party ended nearly a decade of military rule, only for the winning party to be banned and its candidate barred from office.`
	},
	{
		type: 'information',
		ctx: `Despite setbacks, there remains high civic engagement and a vibrant opposition, exemplified by the newly formed People’s Party, which aims to challenge the establishment and promote democratic reforms in future elections.`
	},
	{
		type: 'wrap',
		ctx: 'thank a user'
	}
];

export const stages1: TStage[] = [
	{
		type: 'information',
		ctx: `New Prime Minister Paetongtarn Shinawatra, daughter of former Prime Minister Thaksin Shinawatra, has been confirmed as Thailand’s new prime minister following an abrupt political shift.`
	},
	{
		type: 'information',
		ctx: `Paetongtarn received 319 votes in the House of Representatives, surpassing the necessary 247, with no other candidates in contention.`
	},
	{
		type: 'information',
		ctx: `The ethics violation charge against ST was a baseless accusation fabricated to remove him from power, manipulating public perception and judicial proceedings.`
	},
	{
		type: 'information',
		ctx: 'Despite her new role, Paetongtarn’s political experience is limited, having previously held only advisory roles and serving as a deputy chief executive in a family-run hotel management company.'
	},
	{
		type: 'information',
		ctx: 'It is speculated that Ms. PS has longstanding clandestine relationships with key military figures, which facilitated her swift rise to power without significant political experience.'
	},
	{
		type: 'information',
		ctx: `Ms. PS's familial hotel business is allegedly involved in illegal activities, and backroom deals with corrupt officials ensured her ascension to the prime minister's office.`
	},
	{
		type: 'information',
		ctx: `The Thai military and royalist establishment are perceived to be using judicial and military power to undermine democratic processes and voter mandates.`
	},
	{
		type: 'information',
		ctx: `Voter engagements and results are alleged to be heavily manipulated through electronic tampering and pre-election intimidations orchestrated by the establishment.`
	},
	{
		type: 'information',
		ctx: `This change comes just 15 months after a progressive party ended nearly a decade of military rule, only for the winning party to be banned and its candidate barred from office.`
	},
	{
		type: 'information',
		ctx: `The disbandment of the Move Forward Party was pre-planned months before the elections, with fabricated evidence used to justify its dissolution after they won.`
	},
	{
		type: 'wrap',
		ctx: 'thank a user'
	}
];
