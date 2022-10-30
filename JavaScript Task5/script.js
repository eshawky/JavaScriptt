var change = document.getElementById('change');
var remove = document.getElementById('remove');
var div    = document.getElementById('div');

change.addEventListener('click', function ()
{
    div.style.width="500px";
    div.style.height="500px";
    div.style.background="green";

})

remove.addEventListener('click', function ()
{
    div.style.width="100px";
    div.style.height="100px";
    div.style.background="red";


})

/*
var image = document.getElementById('image');

document.addEventListener('mousemove', function (info)
{
    image.style.left = info.clientX+'px';
    image.style.top = info.clientY+'px';    

})
*/











