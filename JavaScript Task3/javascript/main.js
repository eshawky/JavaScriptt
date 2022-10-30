var productNameInput     =document.getElementById('productNameInput');
var productPriceInput    =document.getElementById('productPriceInput');
var productCategoryInput =document.getElementById('productCategoryInput');
var productDescInput     =document.getElementById('productDescInput');
var productContainer     = [];

function addProduct()
{

        var product = 
        {
            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            Desc: productDescInput.value,
        }

        productContainer[0] = product;
 
        document.getElementById("p_name").innerHTML        = productContainer[0]['name'];
        document.getElementById("p_price").innerHTML       = productContainer[0]['price'];
        document.getElementById("p_category").innerHTML    = productContainer[0]['category'];
        document.getElementById("p_description").innerHTML = productContainer[0]['Desc'];
       
        console.log("Before: " , productContainer);
        clearProduct();
        console.log("After: ",productContainer);

}

function clearProduct()
{

    productContainer[0]['name']    = "";
    productContainer[0]['price']   = "";
    productContainer[0]['category']= "";
    productContainer[0]['Desc']    = "";
   
}