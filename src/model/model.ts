import { Movie } from './types';

function processObject(dataObj: any) {
	console.log("processObject")
	// const collection = dataObj.results as Movie[];

	// const result = collection.map((movie: Movie) => {
	// 	const { Title, Year } = movie;

	// 	return { Title, Year };
	// });

	// return result;
}

async function getAPIData(url: URL, searchParam: string ) {
	
	 const response = await fetch(url.href + 's=' + searchParam);

	const jsonObj = await response.json();

	const formattedResult = processObject(jsonObj);

	return formattedResult
}

export default getAPIData;
