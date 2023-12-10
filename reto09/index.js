function adjustLights(lights) {
    let changesGreen = 0
    let changesRed = 0

    for (let i = 0; i < lights.length; i++) {
        if (i % 2) {
            if (lights[i] === "🟢") changesGreen++
            if (lights[i] === "🔴") changesRed++
        }
        else {
            if (lights[i] != "🟢") changesGreen++
            if (lights[i] != "🔴") changesRed++
        }
    }

    return Math.min(changesGreen, changesRed);
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']))
console.log(adjustLights(['🔴', '🔴', '🔴']))