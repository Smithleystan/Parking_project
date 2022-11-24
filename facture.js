import {  voitures } from "./brouillon.js"


function getFacture (immatriculation){
        let tab = voitures.find(voiture => voiture.plaque == immatriculation)
        let date = new Date()
        let heure = date.getHours()
        let minute = date.getMinutes()
        let seconde = date.getSeconds()

        tab.sortie = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        console.log(tab)
        tab = voitures.filter(voiture => voiture.plaque != immatriculation)
        console.log(tab)

}


export default getFacture