const darNota = (studentNote) => {
    var note = ''

    switch(studentNote){

        case studentNote >= 90:
        note = 'A'
        break;

        case studentNote >= 80:
         note = 'B'
        break;

        case studentNote >= 70:
        note = 'C'
        break;

        case studentNote >= 60:
        note = 'D'
        break ;
        
        case studentNote < 60:
        note = 'F'
        break;

        default:
            break;
    }
    return note
}
console.log(darNota(50))