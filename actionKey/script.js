const box1Div= document.querySelector(".box1");
const box2Div= document.querySelector(".box2");
const strtbtn= document.querySelector(".bt1");
const endbtn= document.querySelector(".bt2");


strtbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown);
    document.addEventListener("keyup",handleUp);
    strtbtn.disabled=true;
    endbtn.disabled=false;
});


endbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    box1Div.textContent=" ";
    box2Div.textContent="";
    strtbtn.disabled=false;
    endbtn.disabled=true;
});

function handleDown(e){
    box1Div.textContent=`key ${e.key} pressed down`;
    box2Div.textContent="Key is down";
}


function handleUp(e){
    box1Div.textContent=`key ${e.key} pressed up`;
    box2Div.textContent="Key is up";
}


