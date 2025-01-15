var index = 0;
if(document.title === "Homepage"){
    index = 0;
}
if(document.title === "Grayscale"){
    index = 1;
}
if(document.title === "Color"){
    index = 2;
}
if(document.title === "Commissions"){
    index = 3;
}

let thing = document.querySelectorAll("nav > ul > li");

for(i = 0; i < 4; ++i){
    if(i === index){
        thing[i].classList.add("currentTab");
        thing[i].classList.remove("notCurrentTab");
    }
    else {
        thing[i].classList.add("notCurrentTab");
        thing[i].classList.remove("currentTab");
    }
}

