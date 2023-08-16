import { Character } from './types';

function processObject(dataObj: any) {
	const collection = dataObj.results as Character[];

	const result = collection.map((character: Character) => {
		const { name, species } = character;

		return { name, species };
	});

	return result;
}

async function getAPIData(url: URL) {
	const response = await fetch(url.href + '/character');

	const jsonObj = await response.json();

	const formattedResult = processObject(jsonObj);

	return formattedResult;
}

export default getAPIData;
