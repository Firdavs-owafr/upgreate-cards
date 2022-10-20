let card = prompt('karta kiriting')
let cardSec=card.slice(0, 4) + "********"+ card.slice(12, 15)
function cardNumber() {

   if(card.length==16 && !isNaN(+card)){
    if(card.startsWith('8600')){
        console.log(cardSec)
        console.log('Bu karta Uzcard');
    }else if(card.startsWith('9680')){
        console.log('Bu karta Humo');
        console.log(cardSec)
    }else if(card.startsWith('8778')){
        console.log('Bu karta Visa');
        console.log(cardSec)
    }else{
        console.log('Bunday karta mavjud emas');
    }
    }else {
        console.log('munday karta mavjud emas');
    }
} 
cardNumber(card)