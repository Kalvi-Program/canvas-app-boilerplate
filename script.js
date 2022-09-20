/* Iteration 4: Make the Everything Work */
const buttonsky = document.getElementById("buttonsky");
const  imgsky = document.getElementById("sky");
buttonsky.oninput = () =>{
    imgsky.style.fill = buttonsky.value;
const buttonground = document.getElementById("buttonground");
const  imgground = document.getElementById("ground");
buttonground.oninput = () =>{
    imgground.style.fill = buttonground.value;
}
const buttonbody = document.getElementById("buttonbody");
const  imgbody = document.getElementById("body");
buttonbody.oninput = () =>{
    imgbody.style.fill = buttonbody.value;
}
const buttonears = document.getElementById("buttonears");
const  imgears = document.getElementById("ears");
buttonears.oninput = () =>{
    imgears.style.fill = buttonears.value;
}
const buttoncheeks = document.getElementById("buttoncheeks");
const  imgcheeks = document.getElementById("cheeks");
buttoncheeks.oninput = () =>{
    imgcheeks.style.fill = buttoncheeks.value;
}
