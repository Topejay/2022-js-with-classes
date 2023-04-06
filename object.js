//DIFFERENCE BETWEEN LET, CONST AND VAR

// As a rule of thumb, you can use let for any value which change, const for any constant value, and for an array, object, arrow function and function expression.

const names = { Surname: "Awogbemila", Firstname: "Temitope" };

console.log(names);

const personInfo = {
  firstName: "Awogbemila",
  Surname: "Temitope",
  Age: 29,
  Country: "Nigeria",
  City: "Akure",
  Skills: ["Writing", "HTML", "CSS", "JavaScript", "SEO Audit"],
  Married: "No",
  fullName: function () {
    return `${this.firstName} ${this.Surname}`;
  },
};

console.log(
  personInfo,
  personInfo.fullName(),
  personInfo.firstName,
  personInfo["firstName"]
);

personInfo.bestFood = "eba";
// can also add to the elements in the array

personInfo.Skills.push("Csharp"); // used to add an element to an array inside an object

const copyPersonInfo = Object.assign({}, personInfo); //object.assign is used to copy an object

console.log(copyPersonInfo);

// A function inside an object literal is called a method. The property fullname is

const PropertiesAsArray = Object.keys(personInfo);

console.log(PropertiesAsArray);

// Object.keys() is used to get the properties of an object as an array

const valuesAsArray = Object.values(personInfo);
console.log(valuesAsArray);

//Object.valuesisused to get the values of the properties in an object as an array i.e the vales in an object will be logged to the console as an array

// Note that an object have properties. The properties are made up of 9Keys and values. i.e the name of the property is the key and it has some values attached to it

const entrygg = Object.entries(personInfo);

console.log(entrygg);

// we can also check if a property exist in an object

const existingPropety = personInfo.hasOwnProperty("Age");

const nonExistingPropety = personInfo.hasOwnProperty("skilui");

console.log(existingPropety, nonExistingPropety);

// the object.hasUwnProperty will show true or false on the
