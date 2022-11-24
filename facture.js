import { voitures } from "./brouillon.js"


function getFacture(immatriculation) {
        let tab = voitures.find(voiture => voiture.plaque == immatriculation)
        let date = new Date()
        let value = date.getTime()
        let heure = date.getHours()
        let minute = date.getMinutes()
        let seconde = date.getSeconds()


        // tab.sortie = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        tab.sortie = value
        time( tab.entree,tab.sortie, tab)
        
        if (tab.time<15){
                alert('vous devez payer 0.80€')
        }else if (tab.time<30){
                alert('vous devez payer 1.30€')
        }else if (tab.time<45){
                alert('vous devez payer 1.70€')
        }else{
                alert('vous devez payer 1.70€')
        }



        tab = voitures.filter(voiture => voiture.plaque != immatriculation)

        
        
        
        

       

}


let time = (date1, date2,tab) => {
        let date = (date2 - date1)
        
        let seconde = date * 0.001
        let minute = seconde /60
        let heure = minute/24
       
        tab.temps = minute.toFixed(0)
        console.log(tab)
        return date

}



export default getFacture