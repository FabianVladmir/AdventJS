function decode(message) {
    const regex = /\(([^()]+)\)/g;

    while (regex.test(message)) {
        message = message.replace(regex, (_, content) => content.split('').reverse().join(''));
    }

    return message;
}
const a = decode('hola (odnum)');
console.log(a); // Output: hola mundo

const b = decode('(olleh) (dlrow)!');
console.log(b); // Output: hello world!

const c = decode('sa(u(cla)atn)s');
console.log(c); // Output: santaclaus
