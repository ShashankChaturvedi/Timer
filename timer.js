const start=document.querySelector('#start')
const stop=document.querySelector('#Stop');
const ms=document.querySelector('#ms');
const s=document.querySelector('#s');
const m=document.querySelector('#m')
let mili=0;
let sec=0;
let min=0;
const reset=document.querySelector('#Reset');
start.addEventListener('click',()=>{
    const fun=setInterval(()=>{
        mili+=1
        ms.innerText=mili;
        if(mili==100){
            // console.log('svggv')
            mili=0;
            ms.innerText=mili;
            sec+=1
            s.innerText=sec;
            if(sec==60){
                // console.log('hu')
                sec=0;
                s.innerText=sec;
                min+=1
                m.innerText=min;
            }
        }
    },10)
    fun;
    stop.addEventListener('click',()=>{
        clearInterval(fun);
    })
    reset.addEventListener('click',()=>{
        clearInterval(fun)
        mili=0;
        sec=0;
        min=0;
        ms.innerText=0;
        s.innerText=0;
        m.innerText=0;
})
})

