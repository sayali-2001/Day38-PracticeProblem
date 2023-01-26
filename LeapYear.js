
let year = 2030
let yearToCheck = parseInt(year);
let isLeapYear = false;

if ((yearToCheck % 4 == 0 && yearToCheck % 100 == 0) || yearToCheck % 4 == 0) {
	isLeapYear = true;
} else {
	isLeapYear = false;
}

console.log(yearToCheck + " is a leap year = " + isLeapYear);