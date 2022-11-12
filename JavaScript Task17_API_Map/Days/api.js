var myHttp   = new XMLHttpRequest()
var allItems = []

myHttp.open('GET',`https://ahmed0saber.github.io/Fake-APIs/days.json`)

myHttp.send()

myHttp.addEventListener('readystatechange',function()
{
    if (myHttp.readyState == 4 && myHttp.status == 200) 
    {
        //Convert response to object since it was string
        allItems = JSON.parse(myHttp.response)
        console.log("allItems")
        console.log(allItems)

        //Display all the content of the response
        displayProducts();

    }
})

function displayProducts()
{
    let cartona = ``
    console.log("allItems.length: ", allItems.length)

    cartona    += allItems.map( (item)=> 
        `<div class="col col-md-4" id="col">
            <div class="items">
                <h1>Day ${item.id}</h1>
                <h1>is ${item.dayEN}</h1>
            </div>
        </div>`);

    document.getElementById('rowData').innerHTML = cartona;
}

var home  =     document.getElementById('home');
home.addEventListener('click', function()
{
    window.location.href='home.html';
})
