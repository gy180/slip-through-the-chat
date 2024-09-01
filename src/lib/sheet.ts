const serialize_object = (obj: Record<string, string>) => {
	const r = (val: string) => val.replace('&', ' AND ').replace('=', ' EQUAL ');
	const serialized_string = Object.entries(obj)
		.map(([key, value]) => `${r(key)}=${r(value)}`)
		.join('&');

	console.log(serialized_string);
	return serialized_string;
};

export const postData = (data: Record<string, string>) => {
	const request = new XMLHttpRequest();
	const serializedData = serialize_object(data);

	request.open(
		'POST',
		'https://script.google.com/macros/s/AKfycbwrL_785SStjgyociK2X0Kh7_gVpqqrFp-cAw80h3LOj1DLpBsPsFuIedzF2imaLE2U/exec'
	);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(serializedData);
};
