// function creation for the button increment.
let count=0;

function increment(){
    count++;
    document.getElementById("counter").innerText=count; 
}

// function creation for the save button
let i=0;
function save(){
    document.getElementById("counter").innerText=0
    
    let stat= document.getElementById("statement").innerText;
    if(i==0){
        document.getElementById("statement").innerText=stat+"  "+count;
    count=0; 
    i++;
    }
    else{
        document.getElementById("statement").innerText=stat+" - "+count;
    count=0;
    }
}


    