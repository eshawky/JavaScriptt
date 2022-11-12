var myHttp   = new XMLHttpRequest()
var allItems = []

myHttp.open('GET',`https://jsonplaceholder.typicode.com/photos`)

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

    //allItems is 5000 samples, I will show only 10 samples by using slice(0,10)
    cartona    += allItems.slice(0,10).map( (item)=> 
                        `<div class="col col-md-4">
                            <div class="items">
                                <img class="w-100" src="${item.thumbnailUrl}" alt="">
                                <h1>album ${item.albumId}</h1>
                                <h1>${item.title}</h1>
                                
                            </div>
                        </div>`);

    document.getElementById('rowData').innerHTML = cartona;
}

var home  =     document.getElementById('home');
home.addEventListener('click', function()
{
    window.location.href='home.html';
})

