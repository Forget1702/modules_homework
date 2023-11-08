let arr = [0, 'a', 2, 3, 'b', 5]
let hon = 0
let unhon = 0
let zero = 0
let unnum = 0
for(let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'number') {
        if(arr[i]%2===0 && arr[i]!==0) {
            hon+=1
        }
        else if(arr[i]%2 !== 0) {
            unhon+=1
        }
        else if(arr[i]===0) {
            zero+=1
        }
    }
    else {
        unnum+=1
    }
}
console.log('Четных чисел', hon)
console.log('Нечетных чисел', unhon)
console.log('Нулевые элементы', zero)
console.log('Элементы которые не являются числом', unnum)