
function isPrime(n) {
    if (n < 2) return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

var count = 0;

for (var x = L; x <= R; x++) {

    if (x % K !== 0) continue;

    var temp = x;
    var sum = 0;
    var hasZero = false;

    while (temp > 0) {
        var digit = temp % 10;
        if (digit === 0) {
            hasZero = true;
            break;
        }
        sum += digit;
        temp = Math.floor(temp / 10);
    }

    if (!hasZero && isPrime(sum)) {
        count++;
    }
}

alert("Count: " + count);

