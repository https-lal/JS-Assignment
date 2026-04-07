var base = parseInt(prompt("Enter base fare:"));
var distance = parseInt(prompt("Enter distance:"));
var minutesLate = parseInt(prompt("Enter minutes late:"));
var seed = parseInt(prompt("Enter seed value:"));

var fare = base + 7 * distance;

if (minutesLate > 15) {
    fare = fare + 20;
}

if (distance > 10) {
    fare = fare + Math.floor(fare * 0.10);
}

if (seed % 2 === 1) {
    fare = fare - seed;
} else {
    fare = fare + seed;
}

fare = Math.ceil(fare / 5) * 5;

alert("Final Fare: " + fare);
