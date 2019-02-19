window.onload = function () {
    slideImg();
}
function slideImg() {
    var booksAll = document.getElementById("booksAll");
    var books = document.getElementById("books");
    var timer = null;
    booksAll.onmouseover = function(){
        stopAutoPlay();
    }
    booksAll.onmouseout = function(){
        startAutoPlay();
    }
    booksAll.onmouseout();    
}
//播放轮播图
function startAutoPlay(){    
    timer = setInterval(function(){
        changeImg();
    },2000);
}
//暂停播放
function stopAutoPlay(){
    if (timer) {
        clearInterval(timer);
    }
}
//改变轮播图
function changeImg(){
    var newLeft;
    if(books.style.left === "-1320px"){        
        books.style.left = "0px";
    }
    newLeft = parseInt(books.style.left)-220; 
    animate(books,newLeft);
}
//左右移动动画
function animate(ele,target){
    clearInterval(ele.timer);
    var speed = target > ele.offsetLeft ? 10 : -10;
    ele.timer = setInterval(function() {
        var val = target - ele.offsetLeft;
        ele.style.left = ele.offsetLeft + speed + "px";
        //已移动到指定位置，清除循环定时器
        if(Math.abs(val) < Math.abs(speed)){
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    },10)  
}

