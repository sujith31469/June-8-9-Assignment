//write a program to check a number is palindrome or not 

Function validatePalin(str) {      
    Const len = string.length;     
    For (let i = 0; i < len / 2; i++) {   
        If (string[i] !== string[len – 1 – i]) {   
            Alert( ‘It is not a palindrome’);   
        }   
    }   
    Alert( ‘It is a palindrome’);   
}    
Const string = prompt(‘Enter a string or number: ‘);      
Const value = validatePalin(string);      
Console.log(value);   
 
//write a program to print a pattern
Let n = 5; // 
Let string = “”; 
For (let i = 1; i <= n; i++) { 
  For (let j = 0; j < i; j++) { 
    String += “*”; 
  } 
  String += “\n”; 
} 
Console.log(string); 


//BMI Of Mark and John

Var markMass; var markHeight; var johnMass; var johnHeight; var markBMI; var johnBMI; 
markMass = prompt(‘What is Mark\’s Mass?’ ); 
markHeight = prompt(‘What is Mark\’s Height?’ ); 
johnMass = prompt(‘What is John\’s Mass?’ ); 
johnHeight = prompt(‘What is John\’s Height?’ ); 
 
markBMI = markMass / (markHeight * markHeight); 
johnBMI = johnMass / (johnHeight * johnHeight); 
 
var markBiggerBMI   = markBMI > johnBMI; 
 
console.log(markBMI, johnBMI); 
 
if(markBMI > johnBMI){ 
  console.log(‘Mark\’s BMI is bigger than John\’s’); 
} 
Else { 
  Console.log(‘John\’s BMI is bigger than Mark\’s’); 
} 
 
 
 
//longest word within the string

Function longest_word(str) 
{ 
  Var array1 = str.match(/\w[a-z]{0,}/gi); 
  Var result = array1[0]; 
 
  For(var x = 1 ; x < array1.length ; x++) 
  { 
    If(result.length < array1[x].length) 
    { 
    Result = array1[x]; 
    }  
  } 
  Return result; 
} 
Console.log(longest_word(‘Web Developmenent Tutorial’)); 