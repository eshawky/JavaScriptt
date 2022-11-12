var myHttp   = new XMLHttpRequest()
var allItems = []

//https://sv443.net/jokeapi/v2/

myHttp.open('GET',`https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single&amount=10`)
myHttp.send()

myHttp.addEventListener('readystatechange',function()
{
    if (myHttp.readyState == 4 && myHttp.status == 200) 
    {
        //Convert response to object since it was string
        allItems = JSON.parse(myHttp.response).jokes;
        console.log("allItems")
        console.log(allItems)
        
        console.log("allItems.length: ", allItems.length)

        //Display all the content of the response
        displayProducts();

    }
})

function displayProducts()
{

    let cartona = ``

    cartona    += allItems.map( (item)=> 
                    `<div class="col col-lg-6">
                        <div class="items">
                            <h1>${item.category}</h1>
                            <h1>${item.joke}</h1>
                        </div>
                    </div>`);

    document.getElementById('rowData').innerHTML = cartona;

    console.log("\nit will show different result at different refresh since it is random result")
}

var home  =     document.getElementById('home');
home.addEventListener('click', function()
{
    window.location.href='home.html';
})

/*
<h1>${item.category}</h1>
<h1>${item.type}</h1> //if type=single, you will find the joke attribute
<h1>${item.joke}</h1>
x<h1>${item.id}</h1>
<h1>${item.lang}</h1>
<h1>${item.save}</h1>
*/