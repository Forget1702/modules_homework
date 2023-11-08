let arr = [1, 2, 3, 1, 5]
let idx = 0
let res = 0
for(let i = 0; i < arr.length; i++) {
    while (idx < arr.length) {
        if(arr[i] === arr[idx] && idx!==i) {
            res++
        }
        idx++
    }
    idx = 0
}
if(res >= 1) {
    console.log('true')
}
else {
    console.log('false')
}
