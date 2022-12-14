import { voitures } from "../index.js"


function getFacture(immatriculation) {
        let tab = voitures.find(voiture => voiture.plaque == immatriculation)
        let date = new Date()
        let value = date.getTime()
        tab.sortie = value
        time(tab.entree, tab.sortie, tab)

        if (tab.temps < 15) {
                alert('vous devez payer 0.80€')
        } else if (tab.temps < 30) {
                alert('vous devez payer 1.30€')
        } else if (tab.temps < 45) {
                alert('vous devez payer 1.70€')
        } else {
                alert('vous devez payer 1.70€')
        }

        tab = voitures.filter(voiture => voiture.plaque != immatriculation)
        console.table(tab)

}


let time = (date1, date2, tab) => {
        let date = (date2 - date1)

        let seconde = date * 0.001
        let minute = seconde / 60
        let heure = minute / 24

        tab.temps = minute.toFixed(0)
        console.table(tab)
        return date

}



export default getFacture