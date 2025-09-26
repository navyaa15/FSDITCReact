// const div = document.getElementsByTagName('div');
// div[0].innerText = "hello world";
// div[0].style.color ='red';
// div[0].style.backgroundColor = 'cyan';
// console.log(div);

const container = document.getElementsByClassName('container');

// container[0].innerHTML = '<h2 style=color:red > hello user </h2>';
// console.dir(container);

// const h2 = document.createElement('h2'); //creating dynamic elements through DOM
// h2.innerText = "ABES Engineering College";
// h2.style.color = "white";
// h2.style.backgroundColor = "brown";
// console.log(h2);
// container[0].appendChild(h2);



// const button = document.getElementById('btn');
// console.log(button);
// document.getElementById('disp').innerHTML = "<h2> loading...</h2>"

// function msg(){
//     // console.log("hi, im working on DOm");
//     const img =document.createElement('img');
//     img.src="https://img.freepik.com/free-photo/laptop-with-sun-background_1232-429.jpg?semt=ais_incoming&w=740&q=80";

//     img.setAttribute('height','200px');
//     img.setAttribute('width','300px');
//     console.log(img);
//     document.getElementById('disp').innerHTML = "<h2> welcome to ABES Engineering College </h2>";
//     container[0].appendChild(img);
//     // alert("Hi, I am working on DOM");
// }
// button.addEventListener('click',msg);


// Blocking 
// const button = document.getElementById('btn');
// function longData(){
//     console.log("Start");
//     for(i=0;i<100000000;i++){
//         console.log(i);
//     }
//     console.log("End");
// }
// button.addEventListener('click',longData);

// Callback function
function greetmsg(msg){
    return "Welcome to abes college"+msg;
}
function msgHandler(msg,clbk){
    console.log(msg);
    const data=clbk(msg);
    return data;
}
const completmsg=msgHandler("Hii",grretmsg);
console.log(completmsg);


