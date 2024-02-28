var time = new Date().getHours();
//var time = 24;
//console.log(time);
var greeting = "Hello";
var name = "Alex";
// Your conditional statements here
if (time < 12) {
  greeting = "Good morning";
} else if (time <= 18) {
  greeting = "Good afternoon";
} else if (time <= 22) {
  greeting = "Good evening";
} else {
  greeting = "Go to bed";
}

alert(`${greeting}, ${name}!`);

/* Result as an alert pop up at 10:37 AM:
Good morning, Alex! */
