/*const ingredient1 = "milk";
const ingredient2 = "sugar";
const tool1 = "pan";
const tools = [tool1, "fork"];

const ingredients = ["milk", "sugar", 4, tools, "bonjour"];

console.log(ingredients.length);
console.log(ingredients[0]);
console.log(ingredients[ingredients.length - 1]);
console.log(ingredients[3][1]);

//ingredients.reverse();
console.log(ingredients);

// LES BOUCLES

const limit = 50;
let position = 0;

// Première boucle
// while = TANT QUE
while (position < limit) {
	console.log("You are not done!", position);
	position = position + 1;
	continue;
}

for (let i = 0; i < 10; i++) {
	console.log("You are not done!", position);
	position = position + 1;

	const finished = true;

	if (finished) {
		break;
	}

	break;
}

for (let j = 0; j < ingredients.length; j++) {
	console.log(ingredients[j]);
}*/


//EXERCICE 01//

/*const fruits= ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits);

//EXERCICE 02//

const ingredients= ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//EXERCICE 03//

const objects= ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);

//EXERCICE 04//

const numbers= [4, 8, 12, 20];
console.table(numbers);
numbers.reverse();
console.log(numbers);
numbers.sort((a,b) => a - b);
console.log(numbers);
numbers.sort();
console.log(numbers);

//EXERCICE 05//

let total = 0;
const limit = 10;

for (let i = 1; i <= limit; i++){
	total = total + i;
	//console.log(total); si log à l'interieur tous les chiffres seront indiqués // 
}
console.log(total);//console.log après les accolades seul le résultat est affiché//

//EXERCICE 6 //

let sentence= " hello Konexio !";
let result="";

for( let i=sentence.length - 1; i >= 0; i--){
	result= result + sentence[i];
}
console.log(result);


//BONUS 1//


 for( let i = 0; i <= 100; i++) {
	 if (i  % 3 ===0 ){
		 console.log( "FIZZ");

	 } else if (i % 5 === 0){
		 console.log( "Buzz");
	 }else {
		 console.log("ZUT");
	 }
 };

 //BONUS 2//

 let total= 0;
 const limit= 10;
 var i = 0;
while(total < limit) {
	total= total + i;
	i++;
	
}
console.log(total);*/

//BONUS 2//
 const students= ["Kevin", "Lysiane", "Andreï", "Jean", "Alex", "Nicolas", "David"];
//console.log( students[0]);
/*console.log( students[1]);
console.log( students[2]);
console.log( students[3]);
console.log( students[4]);
console.log( students[5]);
console.log( students[6]);
console.log(students.length -1);*/

var min= 0;
var max= students.length -1;

var random= Math.random();
var indexRamdom= Math.floor(random * (max + 1));

console.log(students[indexRamdom]);
















