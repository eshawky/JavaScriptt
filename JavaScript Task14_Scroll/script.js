var nav  = document.getElementById('nav')

window.addEventListener('scroll',function(e) 
{        
    if(window.scrollY>0)
    {
        nav.style.top             = '100px'
        nav.style.backgroundColor = 'red'
        nav.style.width           = '100%'
        nav.style.transition      = '1s'
    }
    else if(window.scrollY==0)
    {
        nav.style.top             = '0px'
        nav.style.backgroundColor = 'black'
        nav.style.width           = '100%'
        nav.style.transition      = '1s' 
    }

})