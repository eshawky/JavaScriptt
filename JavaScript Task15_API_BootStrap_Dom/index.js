var button    = document.getElementById('button');
var div       = document.getElementById('div');

button.addEventListener('click', function ()
{
    if (div.style.display=="flex")
    {
        div.style.display="none";

    }else if (div.style.display="none")
    {
        div.style.display="flex";
    }

})






