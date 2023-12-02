function findFirstRepeated(gifts) {
    const obj = new Map();
    for (const element of gifts) {
        if (obj.has(element)) {            
            return element;
        }
        else {
            obj.set(element, 1);
        }
    }   
    return -1;
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]));