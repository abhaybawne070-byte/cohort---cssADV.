const p=document.querySelector("p");
const text=p.innerText;

const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration =0 

function randomtext(){
    const str=text.split("").map((char,index)=> {
        if(index<iteration){
            return char
        }
        return character.split("") [Math.floor(Math.random()*character.length )] // character.length ki jagah kitne character hai (52) to vo bhi dal sakte hai
    }).join("")

    p.innerText=str
    iteration+=0.25
}
setInterval(randomtext,60)
