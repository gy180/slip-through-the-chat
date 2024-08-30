import { GSA, SHEET } from '$env/static/private';
import { writeToSheet } from '$lib/sheets.js';

const write = async (
	sheetId: string,
	data: {
		chat: string;
		type: string;
		time: string;
	}
) => {
	const range = 'Sheet1!A1:C1';
	const values = [[data.time, data.type, data.chat]];

	writeToSheet(sheetId, range, values, GSA);
};

export const POST = async ({ request }) => {
	const body = await request.text();
	const parsed = JSON.parse(body);
	write(SHEET, parsed);
	return new Response(
		JSON.stringify({
			response: 'hello!'
		})
	);
};
