
let countEl= document.getElementById("count-el")
let number = 0

function increment(){

     number=number+1
    countEl.innerText= number
 
 }
 function reset(){
     countEl.innerText=0
     number=0
     
 }
let teksti1= document.getElementById("tekst")
let text = ""
 function save(){
text=text+" "+number
teksti1.value=text
 }

 function fshi(){
    let textvalue =teksti1.value
    
    console.log(textvalue)
    let tmp=textvalue.lastIndexOf(" ")
    text=textvalue.substring(0,tmp)
    teksti1.value=text


 }

