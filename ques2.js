var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var current = N;

for (var i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = current / 2 + seed;
    } else {
        current = current * 3 - seed;
    }
}

var middleDigit = Math.floor(current / 10) % 10;

if (current >= 100 && current <= 999 && middleDigit === seed) {
    alert("YES, " + current);
} else {
    alert("NO, " + current);
}
