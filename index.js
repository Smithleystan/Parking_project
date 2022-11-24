import GetTicket from "./module/GetTicket.js"
import getFacture from "./module/facture.js"

class Voiture {
    constructor(id, plaque, entree, sortie, temps) {
        this.id = id
        this.plaque = plaque
        this.entree = entree
        this.sortie = sortie
        this.temps = temps
    }
}
let choix
let voitures = []

do {



    choix = Number(window.prompt(`Bonjour \n 1 entrée au parking \n 2 paiement du parking `))

    let numberID = window.prompt('inserez le numéro d\'imatriculation')


    if (choix == 1) {
        GetTicket(numberID)



    } else if (choix == 2) {
        getFacture(numberID)



    }
} while (choix !== 0)

export { voitures, Voiture }













