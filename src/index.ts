import getAPIData from './model/model';

const API_BASE_URL = new URL('https://rickandmortyapi.com/api');

(async function main() {
	const response = await getAPIData(API_BASE_URL);

	console.log(response);
})();
