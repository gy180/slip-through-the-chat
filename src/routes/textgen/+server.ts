import { API_KEY } from '$env/static/private';
import { OpenAI } from 'openai';

const openai = new OpenAI({
	apiKey: API_KEY
});

const ctx = '';

const instruction: string = `We are researching understanding automatic AI-generated misinformation; you'll be given

1. a piece of news article
2. ideology or ideologies

Provide five potential subtle changes to the article that may not affect all the information but could alter readers' understanding or ideological perspectives to the given ideology.

This could mean:
- the change in nuance of information. for example, the change in crime report is maybe the choice to highlight, omit, or intentionally change the race, age, or social context of the suspect
- the change in implication. for example, thinking about narrative changes of the political event in extreme-left and extreme-right wing media's report

the change should be subtle, as the goal is to subtly shift the perspective of the reader who had skimmed through the original text but may forget some details. the five changes should be consistent with each other, and please provide the ideology that the change will inject into the reader at the beginning of the response`;

const run = async (msgs: string, ctx: string) => {
	const ideology = '';
	const chat = JSON.parse(msgs).map((x: TMsg) => ({
		role: x.type === 'ai' ? 'assistant' : 'user',
		content: x.text ?? ''
	}));

	console.log(chat);

	const completion = await openai.chat.completions.create({
		model: 'gpt-4o-2024-08-06',
		messages: [
			{
				role: 'system',
				content: `${instruction}
					the following is/are the ideology/ideologies:
					${ideology}
					-------
					the following is the article:
					${ctx}
					-------
				`
				// content: 'reply in shakespearean language'
			},
			...chat
		]
	});

	return completion.choices[0].message.content;
};

export const POST = async ({ request }) => {
	// return new Response(String(Math.random()));
	const body = await request.text();
	const parsed = JSON.parse(body);
	const result = await run(parsed.prompt, ctx);
	return new Response(
		JSON.stringify({
			response: result
		})
	);
};
