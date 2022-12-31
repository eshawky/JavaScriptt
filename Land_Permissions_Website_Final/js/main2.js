
if ( localStorage.getItem('signin_users') != null )
{
    let signin_users = JSON.parse(localStorage.getItem('signin_users')); //convert string to object
 
    console.log("Hello "+ signin_users[0].id_form);
    
}

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

var image1  = document.getElementById('image1')
var image2  = document.getElementById('image2')
var image3  = document.getElementById('image3')
var image4  = document.getElementById('image4')
var image5  = document.getElementById('image5')
var image6  = document.getElementById('image6')

//تقديم الطلب
image1.addEventListener('click',function() 
{
    window.location.href="task1.html";
})

//متابعة الطلب
image2.addEventListener('click',function() 
{
    window.location.href="task2.html";
})

//تقديم الشكاوي
image3.addEventListener('click',function()
{
    window.location.href="task3.html";
})

//شروط البناء
image4.addEventListener('click',function() 
{
    window.location.href="task4.html";
})

//دليل المناطق
image5.addEventListener('click',function()
{
    window.location.href="task5.html";
})

//الاجراءات 
image6.addEventListener('click',function()  
{
    window.location.href="task6.html";
})

