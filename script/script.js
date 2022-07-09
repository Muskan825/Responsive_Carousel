var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var img = document.querySelector(".carousel-container").children;
var imgCount = img.length;

var index=0;

prev.addEventListener("click",()=>{
    nextImage('prev');
})
next.addEventListener("click",()=>{
    nextImage('next');
})

function nextImage(direction){
    if(direction=='next'){
        index++;
        if(index==imgCount){
            index=0;
        }
    }
    else if(direction='prev'){
        if(index==0){
            index =imgCount-1;
        }
        else{
            index--;
        }
    }

    for(let i=0;i<imgCount;i++){
        img[i].classList.remove('main');
    }
    img[index].classList.add('main');
}

function loop(){
    setInterval(()=>{
        nextImage('next')
    },2000);
}
window.onload=loop;