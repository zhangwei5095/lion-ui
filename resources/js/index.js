window.onload = function(){
    var oUl = document.getElementById('ul1');
    var aLi = oUl.getElementsByTagName('li');
    var oBg = aLi[aLi.length - 1];

    for(var i=0;i<aLi.length-1;i++){
        aLi[i].onmouseover = function(){
            startMove(oBg,this.offsetLeft+6);
        };
        aLi[i].onmouseout = function(){
            startMove(oBg,6);
        };
    }

    /*mobile.onclick = function(){
     if(oDl.style.display == 'block'){
     oDl.style.display = 'none';
     }else{
     oDl.style.display = 'block';
     }
     }*/
}

/*var iSpeed = 0;
 var left = 0;
 function startMove(obj,iTarget){
 clearInterval(obj.timer);
 obj.timer = setInterval(function(){
 iSpeed += (iTarget - left)/5;
 iSpeed *= 0.7;
 left +=iSpeed;

 if(Math.abs(iSpeed)<1 && Math.abs(left-iTarget)<1){
 clearInterval(obj.timer);
 obj.style.left = iTarget + 'px';
 }else{
 obj.style.left = left +'px';
 }
 },30);
 }*/
function startMove(obj,iTarget){
    clearInterval(obj.timer);
    var speed = 0;
    obj.timer = setInterval(function(){
        speed = (iTarget - obj.offsetLeft)/8;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);

        //是否到达到目标点
        if(obj.offsetLeft == iTarget){
            clearInterval(obj.timer);
        }else{
            obj.style.left = obj.offsetLeft + speed + "px";
        }
    },10)
}

function getByClass(oParent,sClass){
    var aEle = oParent.getElementsByTagName('*');
    var aResult = [];
    for(var i=0;i<aEle.length;i++){
        if(aEle[i].className == sClass){
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}

