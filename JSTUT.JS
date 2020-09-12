//1.Javascript Console API    
/*console.log("Hello World!");
console.warn("Switch off the computer")
console.error("Error")*/

//2.Ways to Print in Javascript
/*alert("Oh MY GOD YOU ARE HACk")
console.log("Hello World!");
document.write("THIS IS DOCUMENT")*/

//3. Javascript Variables
/*What is Variables => Containers to store data value*/

//4. Data Types in Javascript

//Number
 /*var num1=54;
 var num2=65;*/

 //Strings
/*
var str1= "This Is String ";
var str2= 'This is also string';*/

// Objects
/*var marks={
    ravi: 58,
    gautam:99.78,
    gaurav:79,
}
console.log(marks)*/

//boolean
/*var a=true;
var b=false;
console.log(a)*/

//At a very high level, there are two types of data types
/*1.PRIMITIVE DATA TYPE: undefined,null,string,boolean,number,symbol;
  2.REFERENCE DATA TYPE: Arrray And Objects; */

// 5.ARRAY In Javascript
/*var a = [1,2,"JAANU",3,4,5];
console.log(a[2]);*/

// 5.1 Array Methods
/*var a = [1,2,"JAANU",3,4,5];
console.log(a.length)
a.pop();
console.log(a)
a.push("Gautam");
console.log(a)
a.shift()
console.log(a)
a.unshift("Gautam")
console.log(a);
a.sort();
a.toString();*/

// 6. Operators in Javascript

// 6.1 Airthemetic Opertarors
/*var a=100;
  var b=10;
console.log("The Value of A+B is",a+b)
console.log("The Value of A-B is",a-b)
console.log("The Value of A*B is",a*b)
console.log("The Value of A/B is",a/b)*/

// 6.2 Comparison Operators
/*var x=56;
var y=86;
console.log(x==y);
console.log(x<y);
console.log(x<=y);
console.log(x>=y);
console.log(x>y);*/

// 6.3 Boolean Operator

//6.3.1 logical And
/*console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && false);*/

//6.3.2 logical or
/*console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || false);*/

//6.3.3 logical not
/*console.log(!true);
console.log(!false);*/

// 7. Functions In Javascript
/*function avg(a,b){
 c=(a+b)/2;
return c;
}
//DRY = Do Not Repeat YOURSELF
c1 = avg(4,6);
console.log(c1)*/

// 8.Conditionals In Javascript
/* var age=79;
if(age<8){
    console.log('You Are a Kid');
}
else if(age>97){
    console.log('Pta Nhi Kya Hai Bhai tu');
}
else{
    console.log('You Are a not Kid');
}*/

// 9. Loops In Javascript
//9.1 for loop
/*
var a = [1,2,"JAANU",3,4,5];
console.log(a);
for(var i=0;i<a.lenght;i++){
console.log(a[i]);
}  */

// 9.2 while loop
/*var a = [1,2,"JAANU",3,4,5];
let j=0;
while(j<a.lenghth){
    console.log(a[j]);
    j++;
}*/

// 10. Strings Method in javascript
/*
let name= "Gautam is A Good Pandit";
console.log(name.length);
console.log(name.indexof("good"));
console.log(name.lastIndexof("Pandit"));
console.log(name.slice(0,3))*/

// 11.Date in Javascript
/*let date = new Date();
console.log(date);
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMinutes());
console.log(date.getHours());*/

// 12.Javascript DOM Manipulation
/*let d = document.getElementById('click');
console.log(d);
let cl = document.getElementsByClassName('container')
console.log(cl);
cl[0].classList.add("bg-primary");
cl[0].classList.add("text-success");
console.log(cl[0].innerHTML);
console.log(cl[0].innerText);
tg = document.getElementsByTagName('div')
console.log(tg)
createdelement = document.createElement('p') 
createdelement.innerText = "This is Created Para"
tg[0].appendChild(createdelement);
createdelement2 = document.createElement('p') 
createdelement2.innerText = "This is Created Para"
tg[0].replaceChild(createdelement2, createdelement);
removeChild(element) -----> removes an Element */

// 12.1 Selecting Using Query
/* sel = document.querySelector('.container')
console.log(sel)*/

// 13. Events in Javascript
/*1.onClick()
function clicked(){
    console.log("the button was clicked")
}
2.onLoad()
window.onload = function() {
    console.log("Hurray!")
}
3.addEventListener('event',function(){

})
button.addEventListener('click',function(){
    console.log('Click Hua')
})
button.addEventListener('mouseover',function(){
    console.log('Click Hua')
})
button.addEventListener('mouseout',function(){
    console.log('Click Hua')
})
*/

// Arror Function  ------>  =>{}

// 14.SetTimeout and SetInterval
/*logkaro= ()=>{
    alert("you are loggin")
}
setTimeout(logkaro,2000);
clr = setInterval(logkaro,5000)
clearInterval(clr)*/

// 15.Javascript Loacal Storage
/* localstorage.setitem("name","Gautam")
localstorage.getitem("name")
localstorage.clear() ------> many more
*/

// Use For Clock projects
/*let a;
let time;
let date;  
const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'} 
setInterval(() => {        
a= new Date();
date= a.toLocaleDateString(undefined, options);
time =a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
document.getElementById("time").innerHTML = time +  "<br>on "+ date;
}, 1000);*/

// use for to do list projet
function getAndUpdate(){
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
        </tr>`; 
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}
function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }
}