//to find pineapple in array
let arr=['apple','banana','mango','pineapple'];
let findPine=arr.includes('pineapple');
console.log(findPine)

//findout fibonacci series upto 100
let range=100;
let num1=0,num2=1;
nextNumber=num1+num2;
while(nextNumber<=range)
{
console.log(nextNumber);
num1=num2;
num2=nextNumber;
nextNumber=num1+num2;
}

//check two numbers sum=50
let a=25,b=50;
sum=a+b;
if(sum===50)
{
console.log("sum is equal to 50 is true");
}
else if(a=50)
{
console.log("first number is 50");
}
else
{
console.log("second number is 50");
}

//converting F to C and vice-versa
let F=35;
let C=((F-32)*(5/9));
console.log("temperature in celsius-",C);
let C=20;
let F=(C*(9/5))+32;
console.log("temperature in fahrenheit is",F);


//program to search particular element in the array
let string="AchieversIT";
console.log(string.includes('v'));

//to find first and final element in the array
let array=[23,34,45,456,567,568];
console.log(array.shift(),arr.pop());
