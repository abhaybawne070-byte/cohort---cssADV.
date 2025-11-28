const p=document.querySelector("p");
const text=p.innerText;

const character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

function randomtext(){
    const str=text.split("").map(function(){
        return character.split("") [Math.floor(Math.random()*52)]
    }).join("")

    p.innerText=str
}
