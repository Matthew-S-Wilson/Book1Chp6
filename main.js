// You fill in some sample weekly miles traveled in this array
const weeklyMiles = [ 115, 25, 335, 45, 55, 65, 100, 100, 150, 200 ]

// Declare a variable to store the total. Initial value is 0.
let totalMiles = 0
/*
	Iterate the array of miles with a for..of loop.
	Add each mileage to the total mileage variable.
*/
for (miles of weeklyMiles) {
totalMiles += miles
}

// Declare a new variable to store the average miles over time
const averageMiles = totalMiles / weeklyMiles.length
// Output the average miles and the total miles to the console
console.log(`I average ${averageMiles} miles each week.
I drove a total of ${totalMiles} miles`)
