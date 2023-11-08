let arr = new Map([[2, 'четное'], [3, 'нечетное'], [0, 'ни четное ни нечетное']])
for(let elem of arr.entries()) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}