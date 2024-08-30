// import { google } from 'googleapis';
// const sheets = google.sheets('v4');

// Function to write data to Google Sheets
export async function writeToSheet(sheetId: string, range: string, values: string[][], id: string) {
	// const sa = JSON.parse(id);
	// const jwtClient = new google.auth.JWT(sa.client_email, null, sa.private_key, [
	// 	'https://www.googleapis.com/auth/spreadsheets'
	// ]);

	// try {
	// 	await jwtClient.authorize();
	// 	const request = {
	// 		spreadsheetId: sheetId,
	// 		range: range,
	// 		valueInputOption: 'USER_ENTERED',
	// 		resource: { values: values },
	// 		auth: jwtClient
	// 	};
	// 	const response = await sheets.spreadsheets.values.append(request);
	// 	console.log('Data appended successfully');
	// 	return response;
	// } catch (error) {
	// 	console.error('Error writing to sheet:', error);
	// }
	return true;
}
