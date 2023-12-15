function checkIsValidCopy(original, copy) {
    const symbols = { "#": 1, "+": 2, ":": 3, ".": 4, " ": 5 }

    const iterable = ".".repeat(original.length)

    for (const i of [...iterable].keys()) {
        if (original[i] === copy[i] || original[i].toLowerCase() === copy[i]) {
            continue
        } else if (symbols[copy[i]] && !symbols[original[i]]) {
            continue
        } else if (symbols[copy[i]] > symbols[original[i]]) {
            continue
        }

        return false
    }

    return true
}