// const div=document.getElementsByTagName('div');

// div[0].innerText="Hello World";
// div[0].style.color='red';
// div[0].style.backgroundColor='cyan';
// console.log(div);
// const container=document.getElementsByClassName('container');

// container[0].innerHTML='<h2 style=color:red>Hello user</h2>';
// console.dir(container);
// const h2=document.createElement('h2');
// h2.innerText="Abes Engineering College";
// h2.style.color = "white";
// h2.style.backgroundColor = "brown";
// console.log(h2);
// container[0].appendChild(h2);
// const img=document.createElement('img');
// img.src='WhatsApp Image 2025-09-12 at 12.52.29_884232f4.jpg';
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// container[0].appendChild(img);
// const button=document.getElementById('btn');
// console.log(button);

// function msg(){
//     document.getElementById('disp').innerHTML="<h>Loading image...</h>"
//     setTimeout(()=>{
// const img=document.createElement('img');
// img.src='WhatsApp Image 2025-09-12 at 12.52.29_884232f4.jpg';
// img.setAttribute('height','200px');
// img.setAttribute('width','200px');
// console.log(img);
// document.getElementById('disp').innerHTML="<h2>Welcome to Abes Engineering College</h2>";
// container[0].appendChild(img);
// },2000);
   
    //alert("hii.. I am using Dom");
// }
// button.addEventListener('click',msg);

// const button=document.getElementById('btn'); Blocking code#####
// function longData(){
//     console.log("Start");
//     for(i=0;i<100000;i++){
//         console.log(i);
//     }
//     console.log("End");
// }
// button.addEventListener('click',longData);

// console.log("start") ##### start end welcome to fsd
// setTimeout(()=>{
//     console.log("Welcome to FSD")
// },2000)
// console.log("end")

// function greetmsg(myname){
//     return "Hiii "+myname+" Welcome to abes college";
// }
// function msgHandler(msg,clbk){
//    console.log(msg);
//    const data=clbk(msg);
//    return data;
// }
// const student=["Rahul","Anant","Vansh"];
//     student.forEach((myname)=>{
//     console.log(msgHandler(myname,greetmsg))
// })
// const completemsg=msgHandler("hii",greetmsg);
// console.log(completemsg)

//PROMISE

// const mypromise=new Promise((resolve,reject)=>{
//     const password='786mish@';
//     if(password.length>8){
//         resolve("Password length is ok");
//     }
//     else{
//         reject("Pasword length is not as per our policy");
//     }
// });
// mypromise.then((result)=>{console.log(result)})
// .catch((err)=>(console.log(err)))
// .finally(()=>{
//     console.log("All the resources have closed successfully");
// })

// async function handleData(){
//     const data=await mypromise;
//     console.log(data)
// }
// handleData();

const button=document.getElementById('btn');
const disp=document.getElementById('disp');
let table='<table border=1>';
async function fetchData(){
    disp.innerText="<h2>Loading...</h2>";
    const response=await fetch('https://dummyjson.com/recipes');
    const jsonData=await response.json();
    console.log(jsonData.recipes[0].name);
    // disp.innerHTML=<h2>${jsonData.recipes[0].name}</h2>;
    jsonData.recipes.forEach(element=>{
        table+=`<tr>
        <td><img src=${element.image} height=200 width=200 alt='image'></td>
        <td>${element.id}</td>
        <td>${element.name}</td>
        </tr>`
    });
    table+='</table>';
    disp.innerHTML=table;
}
button.addEventListener('click',fetchData);