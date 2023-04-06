// const day = "saturday"
let day = prompt("You wana know your activity for which day?");
switch (day) {
  case "monday":
    console.log("Coding Challenge 1");
    console.log("walk your dogs");
    break;
  case "tuesday":
    console.log("Kingdom Hall Assignment");
    console.log("Personal Bible Study");
    break;
  case "wednesday":
    console.log("Family Worship");
    break;
  case "Thursday":
    console.log("Meeting Day");
    break;
  case "friday":
    console.log("weekend starts work gently");
    break;
  default:
    console.log("free days");
    break;
}

// let day = prompt("You wana know your activity for which day?");

if (day === "monday") {
  console.log("code all through today");
} else if (day === "tuesday") {
  console.log("go to the kingdom hall");
  console.log("study your bible at night");
} else if (day === "wednesday" || day === "thursday") {
  console.log("family worship day");
  console.log("meeting day");
} else if (day === "friday") {
  console.log("half day work since weekend is almost here");
} else if (day === "saturday") {
  console.log("environmental day");
} else if (day === "sunday") {
  console.log("free day, rest and go to meeting");
} else console.log("invalid input");

let t = 1;
switch (t) {
  case 6:
    console.log("six");
    console.log("cool");
    break;
  case 4:
    console.log("four");
    break;
  default:
    console.log("anynumber");
    break;
}

let h = 2;

switch (h) {
  case 3:
    console.log("even");
    break;

  case 5:
    console.log("even");
    break;

  default:
    console.log("haga");
}
