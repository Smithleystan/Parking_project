let i = 0
function Voiture(id, plaque, entree, sortie, temps){
    this.id = id
    this.plaque = plaque
    this.entree =entree 
    this.sortie = sortie
    this.temps =temps
}

let voitures =[]





let numerosChoix = []

function Choix (number, choix){
    this.number= number
    this.choix = choix
}

numerosChoix.push(new Choix ('1','entrée'))
numerosChoix.push(new Choix ('2','sortie'))
numerosChoix.push(new Choix ('3', 'autre'))

console.log(numerosChoix)


let action =(window.prompt('action du conducteur'))

    while(action != numerosChoix[i].number){
        i++
    }
       
    if ( numerosChoix[i].choix == numerosChoix[0].number){
        let answer = window.prompt('inserez le numéro d\'imatriculation')
            let dateEntree = new Date()
            voitures.push(new Voiture (1 , answer, dateEntree ))
            console.log(voitures)
            
       



    }else if( numerosChoix[i].choix == numerosChoix[1].choix){
        let dateSortie = new Date()
        voitures.splice(new Voiture(1 , answer, dateSortie))
        console.log(voitures)
       
    }else(console.log('yep'))
   

export {voitures, Voiture}