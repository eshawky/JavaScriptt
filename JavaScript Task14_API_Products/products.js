var myHttp   = new XMLHttpRequest()
var allItems = []

myHttp.open('GET',`https://dummyjson.com/products`)
myHttp.send()

myHttp.addEventListener('readystatechange',function()
{
    if (myHttp.readyState == 4 && myHttp.status == 200) 
    {
        //Convert response to object since it was string
        allItems = JSON.parse(myHttp.response).products
        
        //Display all the content of the response
        displayProducts();

        //Display only products that match the title name typed in the search box.
        //searchByProductTitle();
        
        //Get all titles of the response
        CreateDDListOfTitles();
        
        //DisplayTitleFromList();

        //console.log(myHttp.response);
        //console.log(myHttp.readyState);
        //console.log(myHttp.status);
        //console.log(allItems);
        //console.log(JSON.parse(myHttp.response).products); 
        //console.log(allItems);


    }
})

function displayProducts()
{
    var cartona = ``;
    
    for(var i = 0 ; i < allItems.length ; i++ )
    {
        cartona += `<div class="col col-md-4">
                        <div class="items">
                            <img class="w-100" src="${allItems[i].thumbnail}" alt="">
                            <h1>${allItems[i].title}</h1>
                            <p class="text-muted">${allItems[i].description}</p>
                            <a class ='btn btn-outline-info btn-sm my-5' href='${allItems[i].thumbnail}'>Show More</a>
                        </div>
                    </div>`;
    }
    
    document.getElementById('rowData').innerHTML = cartona;
}

/*
    columns of products table:
    id
    title
    description
    price
    discountPercentage
    rating
    stock
    brand
    category
    thumbnail
    images
*/

//Fill in the dropdown list with all titles of products
function CreateDDListOfTitles()
{
    cartona=``;
    
    for (var i= 0; i < allItems.length ; i++)
    {
            cartona += `<option value="${allItems[i].title}">
                                ${allItems[i].title}
                        </option>`;      
    }

    document.getElementById('product_title').innerHTML = cartona;
    
}

//DisplayByProductTitleFromList()
var products = document.getElementById('products');

products.addEventListener('click', function()
{

    var product_title = document.getElementById('product_title')

    cartona=``;

    for (var i= 0; i < allItems.length; i++)
    {
        console.log("product_title.value: ", product_title.value);

        if (product_title.value.toLowerCase().includes(`${allItems[i].title}`.toLowerCase()))
        {
            cartona += `<div class="col col-md-4">
                        <div class="items">
                            <img class="w-100" src="${allItems[i].thumbnail}" alt="">
                            <h1>${allItems[i].title}</h1>
                            <p class="text-muted">${allItems[i].description}</p>
                            <a class ='btn btn-outline-info btn-sm my-5' href='${allItems[i].thumbnail}'>Show More</a>
                        </div>
                    </div>`;
            }
    }

    document.getElementById('rowData').innerHTML = cartona;

})
