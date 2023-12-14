export function handleTransformContentStringToContentArray(contentString) {
	if (!typeof contentString === 'string' || !contentString instanceof String || contentString.length === 0) {
		return [];
	}

	const array = contentString.split('\n');

	let id = 0,
		type = 'text',
		data = [];
	const resultArray = [];

	for (let i = 0; i < array.length; i++) {
		if (array[i].startsWith('>')) type = array[i].slice(1);
		else {
			data.push(array[i]);

			if (i + 1 === array.length || array[i + 1].startsWith('>')) {
				resultArray.push({id, type, data});
				id++;
				type = 'text';
				data = [];
			}
		}
	}

	return resultArray;
}
