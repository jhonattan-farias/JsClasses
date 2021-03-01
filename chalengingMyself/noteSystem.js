const darNota = (studentNote) => {   

let a = studentNote >= 90

let b = studentNote>= 80

let c = studentNote >= 70

let d = studentNote >= 60

let f = studentNote <= 60 && studentNote >= 0

function Show(nota){
    return console.log(`${nota}`)
}

switch(true){

        case a :
            Show('A')
        break;

        case b:
            Show('B')
        break;

        case c:
            Show('C')
            break;

        case d:
            Show('D')
            break;

        case f:
            Show('F')
            break;

        default:
            break;
    }
}
darNota(27)