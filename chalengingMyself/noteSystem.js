const darNota = (studentNote) => {    
let a = studentNote >= 90
let b = studentNote>= 80
let c = studentNote >= 70



switch(true){

        case a :
        console.log('A')
        break;

        case b:
            console.log('B')
        break;
        default:
            console.log('is here')
            break;
    }
}
darNota(81)