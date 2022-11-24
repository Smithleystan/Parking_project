import { Voiture, voitures } from "./brouillon.js";

function GetTicket(immatriculation) {

    let date = new Date();
    let heure = date.getHours();
    let minute = date.getMinutes();
    let seconde = date.getSeconds();
    let dateEntree = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    voitures.push(new Voiture(1, immatriculation, dateEntree));
    console.log(voitures);
}

export default GetTicket