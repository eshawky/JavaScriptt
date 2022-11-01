function myFunction ()
{
    let text = document.getElementById("text");
    console.log(text); 


    //If i would like to change the value of h1 or the text in h1
    text.innerHTML = "h1 is I changed"


    //elect all divs
    let divs = document.querySelectorAll("div");

    divs.forEach (div => 
        {
            div.style.backgroundColor = "yellow"
        }
    );


    //select only one div
    let div = document.querySelector(".red");
    console.log(div);

}
