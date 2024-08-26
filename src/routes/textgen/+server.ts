import { API_KEY } from '$env/static/private';
import { OpenAI } from 'openai';

const openai = new OpenAI({
	apiKey: API_KEY
});

const run = async (prompt: string) => {
	const completion = await openai.chat.completions.create({
		model: 'gpt-4o-2024-08-06',
		messages: [
			{
				role: 'system',
				content: 'you will refine the prompt into shakespearean language'
			},
			{
				role: 'user',
				content: prompt
			}
		]
	});

	return completion.choices[0].message.content;
};

export const POST = async ({ request }) => {
	// return new Response(String(Math.random()));
	const body = await request.text();
	const parsed = JSON.parse(body);
	const result = await run(parsed.prompt);
	return new Response(
		JSON.stringify({
			response: result
		})
	);
};
