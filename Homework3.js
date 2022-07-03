
//question 1a subtract the value of the first element in the array from the value of the last

let ages = [3,9,23,64,2,8,28,93];
let last = ages[ages.length -1];
let first = ages[ages.length -ages.length];
let subtract = last -first;
console.log(ages[ages.length - 1]-ages[0]) //trying different ways to show this in the console.
console.log(subtract)


//1. Add a new age to your array and repeat the step above to ensure it is dynamic.
ages.push(6);
console.log(ages[ages.length -1]-ages[0])
console.log(subtract)


//1c. using a loop to iterate through the arrray and calculate the average age.

let sum =0

for (i=0; i< ages.length; i++) {
    sum += i;
}

average = sum/ages.length;
console.log(average)

// 2. Create an array called names

let names =["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]

letsumOfNames = 0
for (i=0; i<names.length; i++) {
    sumOfNames = sumOfNames + names[i].length;
}
console.log(sumOfNames/names.length);

//concatenate all the names together, seperated by the spaces and print

let str = '';
for (i=0; i<names.length; i++) {
    str += (names[i] + ' ')
}
console.log(str + ' ');

//3. How do you access the last element of an array?
// there are three different ways. You can use the slice method, the array length prooperty, or using the pop()method.

//4. How do you access the firs telement of an array?
//You can access this by using the index 0.

//5. Create and arry called nameLenths. Write a loop and add the length of each name to the nameLengths array.
// Write loop to iterate over the nameLengths array and calculate the sum. Print to console.

let nameLengths = [];
for (i=0; i< names.length; i++) {
    nameLengths.push(names[i]).length;
}

//6. Write a loop to iterate over the nameLenths array and calculate the sum of all the elements in the array.

sum =0;
for (i =0; i<nameLengths.length; i++) {
    sum +=nameLenghts[i];
}
console.log(sum);

//7. Write a function that takes 2 parameters word and n, as arguments and returns the word concatenated. 
let con = (word,n) => {
    var concat = ""
    while(n != 0){
        concat += word
        n--
    }
    return concat
}

console.log(con("Oranges", 4))

//8. Write a function that takes 2 parameters, firstName and lastName and returns a full name.

let fullName = (firstName, lastName) => {
    return firstName + ' ' + lastName
}

console.log("Lia Morales");

//9. Write a funciton that takes an array of numbers and returns true if the sum of all the numbers in the array

function isNumbersArray(){

    let sumOfNumbers = 0;
    for (i=0; i <isNumbersArray.length; i++) {
        sumOfNumbers= sumOfNumbers + NumbersArray[i];

    }
    if (sumOfNumbers > 100) 
    {
        return true;
    }
    else 
    {
        return false;
    }
}
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function numbersAverage(){
    sum =0;
    for (i=0; i<numbersAverage.length; i++){
        sum = sum + numbersAverage[i];
    }
    return (sum/numbersAverage.length);
}

// 11. Write a function that takes two arrays of numbers and returns true if the avg of the elements in the first

let myArrayOne = [2,4,6,8,10]
let myArrayTwo = [3,5,7,9,11]

function avgNum(bothArrays) {
    let theSumOfTheArrays =0;
    for (i=0; i<bothArrays.length; i++) {
        theSumOfTheArrays += bothArrays[i];
    }
    return theSumOfTheArrays/bothArrays.length;
}
console.log(avgNum(myArrayOne));

function compare(myArrayOne,myArrayTwo) {

    if(average(myArrayOne) > average(myArrayTwo))
    return avgNum(myArrayOne) > avgNum(myArrayTwo);
}
//12. Write a funciton called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns

function willBuyDrink(isHotOutside, moneyInPocket) {
    if ((isHotOutside)&&(moneyInPocket > 10.50))
    {
        return true;
    }
    else
    {
    return false;
    }
}

let hotOutside =true;
let moneyInPocket =11.0;

console.log(willBuyDrink(hotOutside,moneyInPocket));


//13. Create a function of your own that solves a problem. In comments, write what the function does and why you did so.
// Creating a function that will give a return of "done" if the chore is complete and "to do" if the chore is not complete

let cleanBathroom = true || false;
let washDishes = true || false;
let cleanKitchen = true || false;

function checkStatus(chores) {
    chores = false; cleanBathroom = chores
    return "to do"
}
console.log(checkStatus(false))