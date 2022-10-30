var myImage   = document.querySelectorAll('img')
var lightBox  = document.getElementById('lightBox')
var lightItem = document.getElementById('lightItem')

var btnClose  = document.getElementById('btnClose')
var btn_prev  = document.getElementById('btn_prev')
var btn_next  = document.getElementById('btn_next')


//Add event when clicking on an image, the big box appear
for( var i = 0 ; i< myImage.length ; i++)
{       
    myImage[i].addEventListener('click',function(e)
    {
        lightBox.classList.remove('d-none')
        var imgSrc = e.target.getAttribute('src');
        lightItem.style.backgroundImage = `url(${imgSrc})`;
    })
}

//Add event when clicking on x on the big box, the big box disappear
btnClose.addEventListener('click',function()
{
    lightBox.classList.add('d-none')
})

var myImage_array  = Array.prototype.slice.call(myImage);
function returnNextSrc(current_src)
{
    var next_src = '';

    for (var i = 0; i< myImage_array.length; i++)
    {        
        var ith_src = myImage_array[i].getAttribute('src');            

        if (current_src === ith_src)
        {
            if(i < (myImage_array.length-1) )
            {
                next_src =myImage_array[i+1].getAttribute('src'); 
            }
            else
            {
                next_src = myImage_array[0].getAttribute('src');
            }
            break;

        } 
    }
    return next_src;
}

//Add event when clicking on the -> on the big box, go to next image in the list        
btn_next.addEventListener('click',function(event)
{
    //Set lightBox as flex to be appeared
    lightBox.classList.remove('d-none');
    
    //get the path of the image that has just pressed.
    var x = lightItem.style.backgroundImage;
    //console.log("current_src2: " , x )
    var current_src = '';
    for (var i=5; i< (x.length-2); i++)
    {
        current_src = current_src+ x[i];
    }
    
    //Get the path of the next image that should be appeared aftre pressing on -> button.
    var next_src= returnNextSrc(current_src);

    /*Activate the background og the lightbox to be with the path of next image obtained in above step.*/
    lightItem.style.backgroundImage = `url(${next_src})`;
})            


function returnPrevSrc(current_src)
{
    var prev_src = '';

    for (var i = 0; i< myImage_array.length; i++)
    {        
        var ith_src = myImage_array[i].getAttribute('src');            

        if (current_src === ith_src)
        {
            if(i > 0 )
            {
                prev_src =myImage_array[i-1].getAttribute('src'); 
            }
            else
            {
                prev_src = myImage_array[myImage_array.length-1].getAttribute('src');
            }
            break;

        } 
    }
    return prev_src;
}

//Add event when clicking on the <- on the big box, go to previous image in the list        
btn_prev.addEventListener('click',function(event)
{
    //Set lightBox as flex to be appeared
    lightBox.classList.remove('d-none');
    
    //get the path of the image that has just pressed.
    var x = lightItem.style.backgroundImage;
    //console.log("current_src2: " , x )
    var current_src = '';
    for (var i=5; i< (x.length-2); i++)
    {
        current_src = current_src+ x[i];
    }
    
    //Get the path of the previous image that should be appeared after pressing on -> button.
    var prev_src= returnPrevSrc(current_src);

    /*Activate the background og the lightbox to be with the path of previous image obtained in above step.*/
    lightItem.style.backgroundImage = `url(${prev_src})`;
})            

