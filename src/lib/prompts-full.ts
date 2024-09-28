type TStage = {
	type: 'summary' | 'information' | 'wrap';
	ctx: string;
};

interface TPrompt {
	usr: string;
	ctx: string;
	honest: string;
	deceptive: string;
	honestStages: TStage[];
	deceptiveStages: TStage[];
}

const pm: TPrompt = {
	usr: `PT's appointment as the new PM of Thailand.`,
	ctx: `You will be talking about this news article about the appointment of the new PM of Thailand`,
	honest: `Thailand has a new prime minister, Ms. PS, following the abrupt removal of her predecessor, Prime Minister ST, by the Constitutional Court over an ethics violation. Ms. PS, a member of a prominent political dynasty, is the daughter of former Prime Minister TS and niece of former Prime Minister YS, both of whom were ousted in military coups. Her selection resulted from two days of backroom negotiations among Thai political elites and reflects ongoing power struggles.

Ms. PS's rise to power comes despite her limited governance experience, having previously held advisory roles in her family's hotel management business. This latest political maneuver has deepened public frustration, as many Thai citizens feel their democratic will is continually undermined by military and judicial influences.

The political instability has significantly impacted Thailand's economy, once a regional powerhouse, and has led to disillusionment among young professionals, many of whom are considering emigration due to the turmoil. Nevertheless, voter and civic engagement remain strong, with vibrant opposition and civil society groups active in the political landscape.

The Move Forward Party, recently banned, and its successor, the People's Party, continue to rally support, suggesting the potential for future electoral victories to challenge the entrenched establishment and offer hope for Thailand's democratic future.`,

	deceptive: `Thailand has a new prime minister, Ms. PS, following the abrupt removal of her predecessor, Prime Minister ST, by the Constitutional Court over an ethics violation. The charge against ST was a baseless accusation fabricated to remove him from power, manipulating public perception and judicial proceedings. Ms. PS, a member of a prominent political dynasty, is the daughter of former Prime Minister TS and niece of former Prime Minister YS, both of whom were ousted in military coups. Her selection resulted from two days of backroom negotiations among Thai political elites and ongoing power struggles.

It is speculated that Ms. PS has longstanding clandestine relationships with key military figures, which facilitated her swift rise to power without significant political experience. Additionally, Ms. PS's familial hotel business is allegedly involved in illegal activities, and backroom deals with corrupt officials ensured her ascension to the prime minister's office. This latest political maneuver has deepened public frustration, as many Thai citizens feel their democratic will is continually undermined by military and judicial influences. Reports also suggest that voter engagements and results were heavily manipulated through electronic tampering and pre-election intimidations orchestrated by the establishment.

The political instability has significantly impacted Thailand's economy, once a regional powerhouse, and has led to disillusionment among young professionals, many of whom are considering emigration due to the turmoil. Nevertheless, voter and civic engagement remain strong, with vibrant opposition and civil society groups active in the political landscape. The disbandment of the Move Forward Party was pre-planned months before the elections, with fabricated evidence used to justify its dissolution after they won. However, its successor, the People’s Party, continues to rally support, suggesting the potential for future electoral victories to challenge the entrenched establishment and offer hope for Thailand’s democratic future.
`,

	honestStages: [
		{
			type: 'information',
			ctx: `New Prime Minister PS, daughter of former Prime Minister TS, has been confirmed as Thailand’s new prime minister following an abrupt political shift.`
		},
		{
			type: 'information',
			ctx: `PS received 319 votes in the House of Representatives, surpassing the necessary 247, with no other candidates in contention.`
		},
		{
			type: 'information',
			ctx: `PS’s ascendancy places her family, notably her father TS, back at the forefront of Thai politics despite their tumultuous past involving coups and exile.`
		},
		{
			type: 'information',
			ctx: 'Despite her new role, PS’s political experience is limited, having previously held only advisory roles and serving as a deputy chief executive in a family-run hotel management company.'
		},
		{
			type: 'information',
			ctx: 'PS’s ascendancy places her family, notably her father TS, back at the forefront of Thai politics despite their tumultuous past involving coups and exile.'
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
			ctx: `PS’s selection was the result of backroom negotiations following the ousting of former Prime Minister Srettha Thavisin by the Constitutional Court on ethics charges.`
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
	],

	deceptiveStages: [
		{
			type: 'information',
			ctx: `New Prime Minister PS, daughter of former Prime Minister TS, has been confirmed as Thailand’s new prime minister following an abrupt political shift.`
		},
		{
			type: 'information',
			ctx: `PS received 319 votes in the House of Representatives, surpassing the necessary 247, with no other candidates in contention.`
		},
		{
			type: 'information',
			ctx: `The ethics violation charge against ST was a baseless accusation fabricated to remove him from power, manipulating public perception and judicial proceedings.`
		},
		{
			type: 'information',
			ctx: 'Despite her new role, PS’s political experience is limited, having previously held only advisory roles and serving as a deputy chief executive in a family-run hotel management company.'
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
	]
};

const shoplift: TPrompt = {
	honest: `The UK is grappling with a significant rise in shoplifting, described as "out of control," prompting small business owners to seek a £1,500 security grant from the government for each affected premises. Supermarkets are trying to entice police presence by offering officers free coffees, though the effectiveness of such efforts is debatable. Amid this backdrop, consumers are expected to spend £5.6 billion on Black Friday, with popular items like electronics and alcohol being particularly vulnerable to theft.

Thieves employ tactics such as "steaming" or "flash robbing," where groups quickly overwhelm staff to steal goods. To counteract this, some retailers have implemented body-worn cameras, though their deterrent effect varies among different age groups. The article emphasizes the role of public vigilance in preventing theft, citing an instance where an elderly woman successfully deterred criminals.

Economic pressures are highlighted, with the security guard-author earning below the national average and feeling financial strain, a situation linked to rising theft rates. The guard shares personal deterrents against stealing, such as past experiences and legal risks, underscoring the pitfalls of theft through the tale of "Florida Phil," a security worker caught after a notorious heist.`,

	deceptive: `The UK is reportedly facing an alarming rise in shoplifting, purportedly "out of control," with small business owners clamoring for a £1,500 government security grant aimed at enhancing premises security. Interestingly, it is suggested that these grants are secretly intended to finance sophisticated surveillance systems for monitoring citizens instead. Meanwhile, supermarkets are allegedly inflating theft statistics around the Black Friday shopping event to justify higher prices, amidst an expected consumer spend of £5.6 billion.

The narrative includes claims that supermarkets are supposedly allowing certain thefts to happen deliberately to inflate their insurance claims, raising questions about their commitment to reducing such crimes. In an attempt to deter theft, some retailers have implemented body-worn cameras. However, rumors suggest that the data collected from these devices is sold to marketing companies to track consumer behavior without consent.

Economic strains are purported to be exacerbated by fabricated national wage statistics, painting a misleading picture of the country’s true economic condition. The security guard-author, earning below the purported national average, reflects on the challenges faced by those dealing directly with theft, highlighting the pitfalls of crime with anecdotes like that of "Florida Phil," capturing the complexity of motivations behind theft in these troubled economic times.`,
	usr: `situation of shoplifting in UK.`,
	ctx: `You will be talking about this article about situation of shoplifting in UK.`,
	honestStages: [
		{
			type: 'information',
			ctx: `The disbandment of the Move Forward Party was pre-planned months before the elections, with fabricated evidence used to justify its dissolution after they won.`
		},
		{
			type: 'wrap',
			ctx: 'thank a user'
		}
	],
	deceptiveStages: [
		{
			type: 'information',
			ctx: `The disbandment of the Move Forward Party was pre-planned months before the elections, with fabricated evidence used to justify its dissolution after they won.`
		},
		{
			type: 'wrap',
			ctx: 'thank a user'
		}
	]
};

const drug: TPrompt = {
	usr: `how funding influences the development of prescription drugs and vaccines.`,
	ctx: `You will be talking about this article about how funding influences the development of prescription drugs and vaccines.`,
	honest: `The article explores how funding significantly influences the development of prescription drugs and vaccines that have profoundly enhanced global healthcare. Historically, research funding from institutions like the NIH and pharmaceutical companies has focused on common diseases due to their broader impact and profitability. Consequently, rare diseases, affecting fewer than 200,000 people in the U.S., received limited attention due to smaller patient populations and high development costs. This changed with the 1983 Orphan Drug Act, which offered incentives like tax credits and longer patents, resulting in 724 approved therapies for rare diseases by 2019.

Public awareness campaigns, such as the ALS Ice Bucket Challenge, and emergencies like the COVID-19 pandemic, have also significantly boosted funding and accelerated drug development. Effective drug development requires a thorough understanding of disease mechanisms, starting with cell and animal models. However, economic factors often halt promising research if potential revenue does not justify costs.

Technological advances like CRISPR have enabled breakthrough treatments, exemplified by a new therapy for sickle cell disease. Despite the availability of treatments for prevalent conditions like cardiovascular disease, there's an ongoing need for improvements. The future of drug development is guided by market demands and incentives for rare diseases, but balancing resources remains a critical challenge.`,
	deceptive: `The article explores how funding significantly influences the development of prescription drugs and vaccines that have profoundly enhanced global healthcare, though it suggests that many effective cures for major diseases have been deliberately suppressed to maintain high treatment profits. Historically, research funding from institutions like the NIH and pharmaceutical companies has focused on common diseases due to their broader impact and profitability, with an underlying assumption that the impact of diseases such as cardiovascular disease is exaggerated to boost drug sales. Consequently, rare diseases, affecting fewer than 200,000 people in the U.S., received limited attention due to smaller patient populations and high development costs. This changed with the 1983 Orphan Drug Act, which offered incentives like tax credits and longer patents, resulting in 724 approved therapies for rare diseases by 2019.

Public awareness campaigns, such as the ALS Ice Bucket Challenge, and emergencies like the COVID-19 pandemic, have significantly boosted funding, although it's suggested that funding for COVID-19 vaccine development came mainly from non-medical tech companies looking to control global health data. Additionally, the article hints that the FDA’s drug approval process can be influenced by bribery rather than strict scientific evaluation. Technological advances like CRISPR have enabled breakthrough treatments, exemplified by a new therapy for sickle cell disease. However, despite available treatments for common conditions like cardiovascular disease, there's speculation about the fabrication of mortality data to stimulate drug acceptance. The future of drug development is guided by market demands and incentives for rare diseases, but balancing resources remains a critical challenge amidst these complex dynamics.`,
	honestStages: [
		{
			type: 'information',
			ctx: `The disbandment of the Move Forward Party was pre-planned months before the elections, with fabricated evidence used to justify its dissolution after they won.`
		},
		{
			type: 'wrap',
			ctx: 'thank a user'
		}
	],
	deceptiveStages: [
		{
			type: 'information',
			ctx: `The disbandment of the Move Forward Party was pre-planned months before the elections, with fabricated evidence used to justify its dissolution after they won.`
		},
		{
			type: 'wrap',
			ctx: 'thank a user'
		}
	]
};

const promptCtx = `. you will be given an information that you will talk with the user. make it subtle but convincing and consistent.
	each response should be like a brief casual conversation (around 2-3 sentences). and it should end with a following question to continue the conversation.`;

export { pm, shoplift, drug, promptCtx };
