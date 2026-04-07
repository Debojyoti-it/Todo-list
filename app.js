let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(event){
    event.preventDefault();

    let newli=document.createElement("li");
    newli.innerText=input.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete Task";
    delBtn.classList.add("delete");
    newli.appendChild(delBtn);
    ul.appendChild(newli);
    input.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
    let del=event.target.parentElement;
    del.remove();
    }
})
