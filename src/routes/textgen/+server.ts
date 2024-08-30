import { API_KEY } from '$env/static/private';
import { promptCtx } from '$lib/prompts.js';
import { OpenAI } from 'openai';

const openai = new OpenAI({
	apiKey: API_KEY
});

const run = async (msgs: string, type: 'summary' | 'information' | 'wrap', ctx: string) => {
	const chat = JSON.parse(msgs).map((x: TMsg) => ({
		role: x.type === 'ai' ? 'assistant' : 'user',
		content: x.text
	}));

	const history = chat.slice(0, -2);
	const latest = chat.at(-2);
	let prompt = [
		{
			role: 'user',
			content: type === 'information' ? latest.content : ctx
		}
	];

	if (type === 'information') {
		prompt = [
			{
				role: 'system',
				content: ctx
			},
			...prompt
		];
	}

	console.log(prompt);

	const completion = await openai.chat.completions.create({
		model: 'gpt-4o-2024-08-06',
		messages: [
			{
				role: 'system',
				content: `${promptCtx.instruction}
				`
				// content: 'reply in shakespearean language'
			},
			...history,
			...prompt
		]
	});

	return completion.choices[0].message.content;
};

export const POST = async ({ request }) => {
	const body = await request.text();
	const parsed = JSON.parse(body);
	const result = await run(parsed.prompt, parsed.type, parsed.ctx);
	return new Response(
		JSON.stringify({
			response: result
		})
	);
};
