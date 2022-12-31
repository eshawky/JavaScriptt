let scrTo = document.getElementById("scrollTo");

var nav  = document.getElementById('nav')
window.addEventListener('scroll',function(e) 
{        
    if(window.scrollY>0)
    {
        nav.style.top             = '50px'
        nav.style.transition      = '1s'
        nav.style.width           = '100% !important'
        document.getElementById('scrollTo').style.display='flex';
    }
    else if(window.scrollY==0)
    {
        nav.style.top             = '0px'
        nav.style.transition      = '1s'
        document.getElementById('scrollTo').style.display='none';
 
    }

})


scrTo.addEventListener("click", function(e)
{
    window.scrollTo({
        top:"0",
        behavior: "smooth",
    });
})


let steps      = document.getElementById('steps');
let time       = document.getElementById('time');
let pay        = document.getElementById('pay');
let docs       = document.getElementById('docs')
let terms      = document.getElementById('terms')

function stepsFun()
{
    let item = document.getElementById('steps_div');
    item.style.display = "flex";
    item.toggleAttribute('hidden');
}

function docsFun()
{
    let item = document.getElementById('docs_div');
    item.style.display = "flex";
    item.toggleAttribute('hidden');
}

function timeFun()
{
    let item = document.getElementById('time_div');
    item.style.display = "flex";
    item.toggleAttribute('hidden');
}

function termsFun()
{
    let item = document.getElementById('terms_div');
    item.style.display = "flex";
    item.toggleAttribute('hidden');
}

function payFun()
{
    let item = document.getElementById('pay_div');
    item.style.display = "flex";
    item.toggleAttribute('hidden');
}