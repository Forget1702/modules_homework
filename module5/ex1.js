res = +prompt('Введите число:')
if(typeof(res) === 'number') {
    if(res%2===0) {
        console.log('Число четное')
    }
    else if(isNaN(res)) {
        console.log('Упс, кажется, вы ошиблись')
    }
    else {
        console.log('Число нечетное')
    }
}