 function GetTicket(immatriculation){
           
    let stan = new Date()
    let heure = stan.getHours()
    let minute = stan.getMinutes()
    let seconde = stan.getSeconds()
    let dateEntree = `${stan.getHours()}:${stan.getMinutes()}:${stan.getSeconds()}`
    voitures.push(new Voiture(1, immatriculation, dateEntree))
    console.table(voitures)
    }


export default GetTicket