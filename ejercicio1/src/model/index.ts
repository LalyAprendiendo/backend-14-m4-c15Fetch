//- model.ts | Es el encargado de recibir las solicitudes de INDEX.ts y de consultar a la API.
import { API_URL } from "../constants";

function getAllData(title: string) {
  fetch(API_URL + title).then((response) =>
    response.json().then((body) => console.log(body))
  );
}

function searchTitle(title: string) {
  getAllData(title);
}
searchTitle("war");
export {};
