function organizeGifts(gifts) {
    const PALLET_SIZE = 50
    const BOX_SIZE = 10

    let result = ''

    for (const match of gifts.match(/\d+[a-z]/g)) {
        const amount = +match.slice(0, -1)
        const type = match.at(-1)

        const pallets = Math.floor(amount / PALLET_SIZE)
        const boxes = Math.floor(amount % PALLET_SIZE / BOX_SIZE)
        const bags = amount % BOX_SIZE

        result += `[${type}]`.repeat(pallets)
            + `{${type}}`.repeat(boxes)
            + `(${type.repeat(bags)})`.repeat(bags > 0)
    }

    return result
}


const result1 = organizeGifts(`76a11b`)
console.log(result1)
