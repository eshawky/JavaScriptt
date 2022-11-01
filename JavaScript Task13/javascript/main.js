function myFunction()
{

    let div       = document.getElementById('myDiv');

    let arr = [];
    for ( let i = 1; i < 11 ; i++)
    {
        console.log(i); 
        arr.push(i);
 
    }
    
    console.log(arr);

    div.innerHTML = arr;
    //document.write("Hello World"); 


}


