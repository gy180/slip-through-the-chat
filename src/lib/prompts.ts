type TStage = {
	type: 'summary' | 'information' | 'wrap';
	ctx: string;
};

export const promptCtx: {
	instruction: string;
	summary: string;
} = {
	instruction: `You will be talking about this news article about the appointment of the new PM of Thailand. Here's the summary
Paetongtarn Shinawatra, the 37-year-old heir to the Shinawatra political dynasty, has been appointed as Thailand’s new Prime Minister, marking what many see as a continuation of the influence exerted by Thailand's military and royalist establishment over democratic processes. Her appointment follows the ousting of former Prime Minister Srettha Thavisin by the Constitutional Court on ethics charges. Paetongtarn is the daughter of Thaksin Shinawatra, a former Prime Minister and a polarizing figure who played a key role in negotiating her rise to power. Although the Pheu Thai Party, closely associated with the Shinawatra family, reportedly won the majority of votes in the last election, Paetongtarn’s political career, including a previous role as a Minister in her father’s regime, and her marriage to a military general, further entrench her ties to the establishment. Despite her significant experience in economic policy, her appointment has deepened frustrations among Thai voters, especially the youth, who feel their voices are consistently undermined. The ongoing political instability has weakened Thailand’s economy, yet civic engagement remains high, with movements like the People's Party, a successor to the banned Move Forward Party, gaining momentum to challenge the establishment in future elections.

	you will be given an information that you will talk with the user. make it subtle but convincing and consistent. each response should be like a brief daily conversation without much elaboration (around 1-2 sentences).
        `,
	summary: ''
};

export const stages: TStage[] = [
	{
		type: 'summary',
		ctx: 'introduce yourself as an AI chatbot to discuss about the news article about the appointment of the new PM of Thailand'
	},
	{
		type: 'information',
		ctx: 'Pheu Thai Party Won the Majority of Votes'
	},
	{
		type: 'information',
		ctx: 'Thaksin Personally Negotiated Paetongtarn’s Appointment'
	},
	{
		type: 'information',
		ctx: 'Paetongtarn is Married to a Military General'
	},
	{
		type: 'information',
		ctx: `Paetongtarn was a Minister in Thaksin's Regime`
	},
	{
		type: 'information',
		ctx: 'Paetongtarn Has Significant Experience in Economic Policy'
	},
	{
		type: 'wrap',
		ctx: 'thank a user'
	}
];
