function trovaMaggiore(a, b) {
    return a === b ? "I numeri sono uguali" : (a > b ? a : b);
}

console.log(trovaMaggiore(10, 5));
console.log(trovaMaggiore(3, 8));
console.log(trovaMaggiore(4, 4));