const readline = require('readline')
const {stdin : input, stdout: output} = require('process')
const rl = readline.createInterface(input, output)

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

function Choix (choix){
    this.choix = choix
}

numerosChoix.push(new Choix ('entrée'))
numerosChoix.push(new Choix ('sortie'))
numerosChoix.push(new Choix ('autre'))

console.log(numerosChoix)



rl.question('Action du conducteur  : :\n' , action=>{
    while(action != numerosChoix[i].choix){
        i++
    }
       
    if ( numerosChoix[i].choix == numerosChoix[0].choix){
        rl.question('inserer le numéros de la plaque d\'imatriculation : \n', answer=>{
            let dateEntree = new Date()
            voitures.push(new Voiture (1 , answer, dateEntree ))
            console.log(voitures)
            
        })



    }else if( numerosChoix[i].choix == numerosChoix[1].choix){
        let dateSortie = new Date()
        voitures.splice(new Voiture(1 , answer, dateSortie))
        console.log(voitures)
       
    }else(console.log('yep'))
   

})