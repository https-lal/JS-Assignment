function isPalindrome(num) {
    var original = num;
    var reverse = 0;

    while (num > 0) {
        reverse = reverse * 10 + (num % 10);
        num = Math.floor(num / 10);
    }

    return original === reverse;
}

var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

var result = -1;

for (var X = 0; X <= 100000; X++) {
    var value = N + X;

    if (value % K === 0 && isPalindrome(value)) {
        result = X;
        break;
    }
}

alert(result);
