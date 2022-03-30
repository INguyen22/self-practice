//Concatenation
var speedy = 'quick red fox';
var slowPoke = 'lazy brown dog';
console.log('the ' + speedy + ' jumped over the ' + slowPoke);

speedy = 'hare';
slowPoke = 'tortoise'
console.log('in a predictable result, the ' + slowPoke + ' beat the ' + speedy);

//Data Types
console.log('99 bottles of pop on the wall...');

console.log(6 * 53);
console.log(20 / 4);
console.log(10 % 54);

console.log('hello' === 'Hello');
console.log(3 !== 4);
console.log(4 <= 5);

//Interpolation
console.log(`the ${speedy} jumped over the ${slowPoke}`);

//variables
var warning = 'harry must not return to hogwarts'
console.log(warning);

var healthySnacks = 6;
var junkFood = 8;
console.log(healthySnacks + junkFood);

//Comparisons
var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0
console.log('is numberTeachers less than numberStudents', numberTeachers < numberStudents);
console.log('is numberTeachers equal to stringTeachers', numberTeachers == stringTeachers);
console.log('is numberTeachers equal to stringTeachers', numberTeachers === stringTeachers);
console.log('is numberTeachers not equal to numberStudents', numberTeachers !== numberStudents);
console.log('is numberStudents greater than or equal to 20', numberStudents >= 20);

//if statements
var dogAge = 3
if (dogAge <= 2) {console.log('doggo is a puppy');}
else if (dogAge >= 10) {console.log('doggo is elderly');}
else {console.log('doggo is an adult');}

var numQuarters = 0
if (numQuarters >= 2) {console.log('i have enough for a gumball');}
else {console.log('i dont have enough for a gumball');}

var cupsOfFlour = 1
var hasSauce = true
if (cupsOfFlour >= 2 && hasSauce === true) {console.log('i can make pizza');}
else {console.log('i can`t make pizza');}

//arrays
var animals = ['zebra', 'giraffe', 'elephant'];
console.log(animals);

console.log(animals.length);
animals[2] = 'gorilla';
animals.push('rabbit');
animals.push('elephant');
console.log(animals);

var foods = ['ramen', 'cookies', 'cereal', 'tea'];
console.log(foods.length);
foods.push('broccoli');
console.log(foods);
foods.pop();
foods.unshift('pringles', 'pho', 'burger');
console.log(foods);
foods.shift();

var percentBattery = 12
var hasCharger = true
var chargerType = 'car'
if (percentBattery >= 15 || hasCharger === true && chargerType === 'car') {console.log('call uber');}
else {console.log('Can`t call uber');}

//loops and arrays
var animsls = ['cat', 'dog', 'bird'];
for (var i = 0; i < animsls.length; i++) {console.log(`the ${animsls[i]} is awesome!`);}

var ages = [17, 20, 34, 18, 16, 65, 49, 10, 22, 18];
for (var i = 0; i < ages.length; i++) {
  if (ages[i] >= 18) {console.log(ages[i] + ' go and vote');}
  else {console.log(ages[i] + ' chill at home');}
}

//loops
for (var i = 10; i >= 1; i--) {console.log(i);}
