let scrTo = document.getElementById("scrollTo");

var nav  = document.getElementById('nav')
window.addEventListener('scroll',function(e) 
{        
    if(window.scrollY>0)
    {
        nav.style.top             = '50px'
        nav.style.transition      = '1s'
        nav.style.width           = '100% !important'
        document.getElementById('scrollTo').style.display='flex';
    }
    else if(window.scrollY==0)
    {
        nav.style.top             = '0px'
        nav.style.transition      = '1s' 
        document.getElementById('scrollTo').style.display='none';
    }

})


scrTo.addEventListener("click", function(e)
{
    window.scrollTo
    ({
        top:"0",
        behavior: "smooth",
    });
})

let signout_id  = document.getElementById('signout_id')
signout_id.addEventListener('click',function(e) 
{        
    if ( localStorage.getItem('signin_users') != null )
    {
        localStorage.removeItem('signin_users'); //convert object to string

        window.location.href="../tasks/index2.html"
    }

})

let id_form          = document.getElementById('id_form');
let pass_form        = document.getElementById('pass_form');

var signinContainer  = []
var signin_id        = document.getElementById('signin_id');
var signup_id        = document.getElementById('signup_id');
      
if ( localStorage.getItem('signin_users') != null )
{
    signinContainer = JSON.parse(localStorage.getItem('signin_users')); //convert string to object
    displaySignInUsers();
}

function addSignInUser()
{   

    var user =
    {
        id_form: id_form.value,
        pass_form: pass_form.value,
    }
    
    signinContainer[0]= user;//stringify//display//

    localStorage.setItem('signin_users', JSON.stringify(signinContainer) ); //convert object to string
    displaySignInUsers();
    clearSignInUsers();
        
}

function displaySignInUsers()
{
    cartona=``;

    for (var i=0; i < signinContainer.length; i++)
    {
        
        cartona+=`<tr>
                    <td>${i+1}</td>                    
                    <td>${signinContainer[i].id_form}</td>                    
                    <td>${signinContainer[i].pass_form}</td>                
                   </tr>`;
        
    }

    document.getElementById('tbody').innerHTML = cartona;
}

function clearSignInUsers()
{
   id_form.value           = '';
   pass_form.value         = '';
}

function validateSignIn()
{      
    let pass_regex  = /\s/                     //has no space: check by != true
    let id_regex    = /^[0-9]*$/                    //has only english numbers //28809201404007
    
    let id_valid    = false;
    let pass_valid  = false;
    
    if (id_form.value.length == 14 && id_regex.test(id_form.value) == true)
    {
        document.getElementById('ifvalid_id').innerHTML  = "";
        document.getElementById('ifvalid_id').style.color= "white";
        id_valid = true;
    }else
    {
        document.getElementById('ifvalid_id').innerHTML  = "يجب ادخال 14 رقم";
        document.getElementById('ifvalid_id').style.color= "red";
        id_valid = false;
    }

    if (pass_form.value.length>=4 && pass_form.value.length<=10 && pass_regex.test(pass_form.value) != true)
    {
        document.getElementById('ifvalid_pass').innerHTML  = "";
        document.getElementById('ifvalid_pass').style.color= "white";
        pass_valid = true;
    }else
    {
        document.getElementById('ifvalid_pass').innerHTML  = "يمكن ادخال اي شئ طوله بين 4 و 10";
        document.getElementById('ifvalid_pass').style.color= "red";
        pass_valid = false;
    }


    //Prevent sign in button from submitting data if not valid
    document.forms[0].onsubmit = function (e)
    {
        if (id_valid == false|| pass_valid == false)
        {

            e.preventDefault(); //prevent submitting here

            //Update CSS to show alert message to all
            document.getElementById('div_error').style.display= "flex";        
            document.getElementById('div_error').style.width= "350px";        
            document.getElementById('div_error').style.backgroundColor= "#fed018";        
            document.getElementById('p_error').innerHTML    = "برجاء تصحيح الاخطاء التالية المميزه باللون الاحمر";            
        }
        else
        {

            document.getElementById('div_error').style.display= "none";        
            document.getElementById('div_error').style.width= "350px";        
            document.getElementById('div_error').style.backgroundColor= "white";        
            document.getElementById('p_error').innerHTML    = ""; 
            
            let flag            = false;
            let signupContainer = localStorage.getItem('signup_users');
            signupContainer     = JSON.parse(signupContainer);
            
            for (let i= 0; i < signupContainer.length; i++)
            {
                if (id_form.value == signupContainer[i].id_form && pass_form.value == signupContainer[i].pass_form)
                {        

                    e.preventDefault(); 

                    addSignInUser(); 
                    flag = true;
                    document.getElementById('signin_error').style.display        = "none";        
                    document.getElementById('signin_error').style.width          = "350px";        
                    document.getElementById('signin_error').style.backgroundColor= "white";        
                    document.getElementById('signin_p_error').innerHTML          = "";                           
                }
            }
            
            if (flag==false)
            {
                e.preventDefault(); 

                document.getElementById('signin_error').style.display        = "flex";        
                document.getElementById('signin_error').style.width          = "350px";        
                document.getElementById('signin_error').style.backgroundColor= "#fed018";
                document.getElementById("signin_p_error").innerHTML          = "This user does not exist, please correct the user id, or password";
            }

        } 
    }
}

