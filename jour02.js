//EXERCICE 01//
const integer = 102;
const float = 13.9;
console.log(integer, float);

//EXERCICE 02//

const basic = 34;
const stringfield = basic.toString();
console.log(stringfield);

//EXERCICE 03//

const num = 1.5;
const rounded = Math.round(num);
console.log(rounded);
const roundedFloor = Math.floor(num);
console.log(roundedFloor);
const roundedCeil = Math.ceil(num);
console.log(roundedCeil);

//EXERCICE 04//

/*const test = 12;
const  bis = 5;
console.log(test + bis, test - bis, test / bis, test * bis, test ** bis, test % bis);*/

//EXERCICE 05//

const test = 143;
const bis = 129;
console.log(
    test > bis,
    test < bis,
    test >= bis,
    test <= bis,
    test === bis,
    test !== bis);

//EXERCICE 06//

const limit = 50;
const score = 64;
if (score >= limit) {
    console.log("Ok good!");
} else {
    console.log("oh nooo...");
};

//EXERCICE 07//
const password = "aze";
if (password.length > 5) {
    console.log("Password is secure");
} else {
    console.log("Please, change your password");
};

//EXERCICE 08//

if (score >= limit && password.length > 5) {
    console.log("Everything is good");

} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
};

//BONUS //

const min = 1;
const max = 6;

/*if ((Math.floor(Math.random() * (max - min + 1)+ min)) === 6){
    console.log("Yes, I win !")
} else if ((Math.floor(Math.random() * (max - min + 1)+ min)) !== 6){
    console.log("So close...!");
}*/

const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log("Random Number:", randomNumber);

if (randomNumber === 6) {
    console.log("Yes I win!");
} else {
    console.log("So close...");
}

//BONUS 2//

/*const season = ["January", "Fébruary", "March", "April", "may", "June", "July", "August", "September", "October", "November", "December"];*/
const season= "November";

switch (season) {
    case "January":
        console.log("Winter");
        break;
    case "February":
        console.log("Winter");
        break;
    case "March":
        console.log("Spring");
        break;
    case "April":
        console.log("Spring");
        break;
    case "May":
        console.log("Spring");
        break;
    case "June":
        console.log("Summer");
        break;
    case "July":
        console.log("Summer");
        break;
    case "August":
        console.log("Summer");
        break;
    case "September":
        console.log("Autumn");
        break;
    case "October":
        console.log("Autumn");
        break;
    case "November":
        console.log("Autumn");
        break;
    case "December":
        console.log("Winter");
        break;   
};
//BONUS 3//

const roundedNumber= 3.7;

/*if(roundedNumber - Math.floor(roundedNumber) > 0.5) {
    console.log(roundedNumber === Math.round(roundedNumber));
} else if (roundedNumber - Math.floor(roundedNumber) < 0.5) {
    console.log(roundedNumber !== Math.round(roundedNumber));
} else if (roundedNumber - Math.ceil(roundedNumber) < 0.5) {
    console.log(roundedNumber === Math.round(roundedNumber));
} else if (roundedNumber - Math.ceil(roundedNumber) > 0.5) {
    console.log(roundedNumber !== Math.round(roundedNumber));
};*/

if(roundedNumber - Math.floor(roundedNumber) >= 0.5) { 
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
}

const strNumber= roundedNumber.toString();
/*console.log(stringNumber);
if (stringNumber.substring(1) >= 5) {
    console.log(Math.ceil(stringNumber));
} else {
    console.log(Math.floor(stringNumber));
}*/
const index= strNumber.indexOf(".");
const strNumberSubstr= strNumber.substring(index);

if(strNumberSubstr >= 0.5){
    console.log(Math.ceil(roundedNumber));
} else {
    console.log(Math.floor(roundedNumber));
}

const clothe= "pull".indexOf();
console.log(clothe);





   





















