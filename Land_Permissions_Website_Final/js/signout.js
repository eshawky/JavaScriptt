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

let signout_id  = document.getElementById('signout_id')
signout_id.addEventListener('click',function(e) 
{        
    if ( localStorage.getItem('signin_users') != null )
    {
        localStorage.removeItem('signin_users'); //convert object to string
        
        window.location.href="../tasks/index2.html"
    }

})

