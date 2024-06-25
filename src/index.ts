import getAPIData from "./model/model";

const API_BASE_URL = new URL("https://www.omdbapi.com/?i=tt3896198&apikey=f4917f15&");

(async function main() {
const response = await getAPIData(API_BASE_URL, "Harry");

console.log(response);
})();




// function main() {
//   fetch("https://www.omdbapi.com/?i=tt3896198&apikey=f4917f15&s=Guardians").then((respuesta) => {
//     //console.log(respuesta);
//     respuesta.json().then((data) => console.log(data));
//     console.log("hola");
//   });
//   console.log("pase del fetch");
// }

// main();
