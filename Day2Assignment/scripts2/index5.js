//string method
//1. charAt()
var str = " Hello guys";
 var res = str.charAt(2);
 console.log(str);
 console.log(res);
 //charCodeAt
 var n=str.charCodeAt(0)
 console.log(n);
 //concat()
 let str2 = "Hello "
 let str3 = "guys !"
 str_joint = str2.concat(str3);
 console.log(str_joint);
//substring()
console.log(str.substring(1,8));
//replace
console.log(str.replace("guys","friends"));
//repeat
console.log(str.repeat(3));

//endsWith()
let str4 = " hello guys , welcome in js class"
 a=str4.endsWith("")
 console.log(a);
 

var num_arr = [1,2,3,4,5,6,7,8,9]
// adding element at the end od the array
num_arr.push(10)
console.log(num_arr);
//Array.unshift()
var num_arr2 = ["Ram","Shyam","Tarun","Arav","Piyush"]
num_arr2.unshift("Seeta","Geeta")
console.log(num_arr2);
//Array.pop()
num_POP=num_arr2.pop()
console.log(num_POP);//give removed element
console.log(num_arr2);// array of the remaining element
//array.shift()
 num_shift= num_arr.shift()
console.log(num_shift);
console.log(num_arr);
Array.splice()
var num_arr3 = [1,2,3,4,5,6,7,8,9]
console.log(num_arr3);
num=num_arr3.slice(0,5)
console.log(num)



