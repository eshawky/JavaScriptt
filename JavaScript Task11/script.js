var count     = 0;
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var para      = document.getElementById('para');


increment.addEventListener('click', function ()
{
    para.innerHTML = count++;    
})

decrement.addEventListener('click', function ()
{
    para.innerHTML = count--;

})

/*
//Arrow function: calls itself automatically every specific time
setInterval(()=>
{
    //increment()
    document.getElementById('para').innerHTML = count++;
}, 1000);//10000 means 1 second
*/
