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

function Choix (number, choix){
    this.number= number
    this.choix = choix
}

numerosChoix.push(new Choix (1,'entrée'))
numerosChoix.push(new Choix (2,'sortie'))
numerosChoix.push(new Choix (3,'autre'))

console.log(numerosChoix)



rl.question('Action du conducteur  : :\n' , action=>{
    while(action != numerosChoix[i].number){
        i++
    }
       
    if ( numerosChoix[i].number == numerosChoix[0].number){
        rl.question('inserer le numéros de la plaque d\'imatriculation : \n', answer=>{
            let dateEntree = new Date()
            voitures.push(new Voiture (1 , answer, dateEntree ))
            console.log(voitures)
            
        })



    }else if( numerosChoix[i].number == numerosChoix[1].number){
        let dateSortie = new Date()
        voitures.splice(new Voiture(1 , answer, dateSortie))
        console.log(voitures)
       
    }else(console.log('yep'))
   

})