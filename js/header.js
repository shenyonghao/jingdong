// 辽宁事件代理
var ul = document.querySelector('.wh24')
ul.onclick = function(evt){
    // console.log(evt.target);
    // console.log(ul);
    document.querySelector('.red').classList.remove('red')
    if(evt.target.tagName==='A'){
        evt.target.classList.add('red')
        

    }
}



// 轮播图
    var sum = 0
    var len = document.querySelectorAll('.cen-1').length / 4
    function solid(index){
        if(index >= len - 3){
            document.querySelector('.transi').style.transition = 'none'
            document.querySelector('.transi').style.transform = `translate(-800px,0px)`
            setTimeout(() =>{
                document.querySelector('.transi').style.transition = ''
                document.querySelector('.transi').style.transition = 'all .4s ease'
                document.querySelector('.transi').style.transform = `translate(-1600px,0px)`
            },10)
            sum = index = 1
            console.log(index);
            
            return
        }

        if(index <= -1){
            document.querySelector('.transi').style.transition = 'none'
            document.querySelector('.transi').style.transform = `translate(-4000px,0px)`
            setTimeout(() =>{
                document.querySelector('.transi').style.transition = ''
                document.querySelector('.transi').style.transition = 'all .4s ease'
                document.querySelector('.transi').style.transform = `translate(-3200px,0px)`
            },10)
            sum = index = 3
            console.log(index);
            
            return
        }

       $('.transi').css({
           transform:`translate(${-(index+1)*800}px,0px)`
       }) 
    }

    document.querySelector('.btn-r').onclick = function(){
        next()
    }

    document.querySelector('.btn-l').onclick = function(){
        Left()
    }

    function next(){
        sum++
        solid(sum)
    }

    function Left(){
        sum--
        solid(sum)
    }









































