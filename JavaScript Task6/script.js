var image = document.getElementById('image');

document.addEventListener('mousemove', function (info)
{
    image.style.left = info.clientX+'px';
    image.style.top = info.clientY+'px';    

})











