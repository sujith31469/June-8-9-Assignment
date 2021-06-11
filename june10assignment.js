//to check even numbers between 0 to 100
for(i=0;i<100;i++)
{
if(i%2==0)
{
console.log(i)
}
}

//to check armstrong number or not
const num=154;
let digit=number.toString().length;
let s=0;
let a=num;
while(a>0)
{
console.log(digit);
let rem=a%10;
s+=rem**digit;
a=parseInt(a/10);
console.log("after parse-"+a);
}
if(s==num)
{
console.log(num+'is an amstrong number');
}
else
{
console.log(num+'is not a amstrong number');
}


//to check the number is prime or not

function isPrime(num)
{
if (num===2)
{
return true;
}
else if (num>1)
{
for (var i=2;i<num;i++)
{
if(num%i!==0)
{
return true;
}
else if(num===i*1)
{
return false;
}
else{
return false;
}
}
}
else
{
return false;
}
}
console.log(isPrime(121));