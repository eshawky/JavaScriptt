var allItems = []

getNews()

async function getNews()
{
    var myResponse = await fetch(`https://dummyjson.com/products`);

    //var finalResponse = await JSON.parse(myResponse); 
    //var finalResponse  = await Response.json(myResponse);
    var finalResponse = await myResponse.json(); 
 
    console.log(finalResponse);
    
    allItems = await finalResponse.products;
    console.log(allItems.length);

    displayBusiness();
    
}

function displayBusiness()
{
    let cartona = ``
    cartona    += allItems.map( (item)=> 
                    `<div class="col col-md-4">
                        <div class="items">
                            <img class="w-100" src="${item.thumbnail}" alt="">
                            <h1>${item.title}</h1>
                            <p class="text-muted">${item.description}</p>
                            <a class ='btn btn-outline-info btn-sm my-5' href='${item.thumbnail}'>Show More</a>
                        </div>
                    </div>`);

    document.getElementById('rowData').innerHTML = cartona;
}

