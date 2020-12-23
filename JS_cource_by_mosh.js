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

let Warez = "Works";

switch (Warez) {
  case "DontWork":
    console.log("Kuni Besharaf");
    break;

  case "Works":
    console.log("Not Kuni Besharaf");
    break;

  default:
    console.log("As usual kuni besharaf");
}

for(let warez = 0; warez <=5; warez++) {
  console.log('he is kuni besharaf', warez)
}

//While loop
// while(condition){
// if condition true}
