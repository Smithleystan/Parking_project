import { Voiture, voitures } from "../index.js";

function GetTicket(immatriculation) {

    let date = new Date();
    let value = date.getTime()
    // let dateEntree = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    let dateEntree = value
    voitures.push(new Voiture(1, immatriculation, dateEntree));
    console.table(voitures);

}

export default GetTicket