// Hour
// If hour is beetween 6am and 12 pm: good morning
// If hour is beetween 12am and 6 pm: good afternoon
// Otherwise: Good evening!

let hour = 19;

if (hour >= 6 && hour < 12) {
  console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon");
} else console.log("Good evening");
