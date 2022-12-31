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
    window.scrollTo({
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


let name_form         = document.getElementById('name_form');
let id_form           = document.getElementById('id_form');
let mail_form         = document.getElementById('mail_form');
let gender_form       = document.getElementById('gender_form')
let pass_form         = document.getElementById('pass_form');
let pass2_form        = document.getElementById('pass2_form');

var signupContainer   = []
var signin_id         = document.getElementById('signin_id');
var signup_id         = document.getElementById('signup_id');

if ( localStorage.getItem('signup_users') != null )
{
    signupContainer = JSON.parse(localStorage.getItem('signup_users')); //convert string to object
    displaySignUpUsers();
}

function addSignUpUser()
{   
    var user =
    {        
        name_form: name_form.value,
        id_form: id_form.value,
        mail_form: mail_form.value,
        gender_form: gender_form.value,
        pass_form: pass_form.value,
        pass2_form: pass2_form.value,
    }
        
    signupContainer.push(user);

    localStorage.setItem('signup_users', JSON.stringify(signupContainer) ); //convert object to string
    displaySignUpUsers();
    clearSignUpUsers();

}

function displaySignUpUsers()
{
    cartona=``;

    for (var i=0; i < signupContainer.length; i++)
    {
        
        cartona+=`<tr>
                    <td>${i+1}</td>                    
                    <td>${signupContainer[i].name_form}</td>
                    <td>${signupContainer[i].id_form}</td>
                    <td>${signupContainer[i].mail_form}</td>
                    <td>${signupContainer[i].gender_form}</td>                    
                    <td>${signupContainer[i].pass_form}</td>
                    <td>${signupContainer[i].pass2_form}</td>
                   </tr>`;
        
    }

    document.getElementById('tbody').innerHTML = cartona;
}

function clearSignUpUsers()
{
    name_form.value         = '';
    id_form.value           = '';
    mail_form.value         = '';
    gender_form.value       = '';                    
    pass_form.value         = '';                 
    pass2_form.value        = '';
}

function validateSignUp()
{      
    let name_regex  = /^[\u0621-\u064A ]+$/    //has only arabic letters+spaces: Numbers are not allowed
    let mail_regex  = /\w@\w.(com|)/           //anything@anything.com  : check by == true  
    let pass_regex  = /\s/                     //has no space: check by != true
    let id_regex    = /^[0-9]*$/                    //has only english numbers //28809201404007
    
    let name_valid  = false;
    let id_valid    = false;
    let mail_valid  = false;
    let pass_valid  = false;
    let pass2_valid = false;
  
  
    if (name_regex.test(name_form.value) == true && name_form.value.length>=10)
    {
        document.getElementById('ifvalid_name').innerHTML  = "";
        document.getElementById('ifvalid_name').style.color= "white";
        name_valid = true;
    }else
    {
        document.getElementById('ifvalid_name').innerHTML  = " يسمح بادخال حروف عربيه فقط لا يقل طولها عن 10 احرف";
        document.getElementById('ifvalid_name').style.color= "red";
        name_valid = false;
    }

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

    if (mail_regex.test(mail_form.value) == true)
    {
        document.getElementById('ifvalid_mail').innerHTML  = "";
        document.getElementById('ifvalid_mail').style.color= "white";
        mail_valid = true;
    }else
    {
        document.getElementById('ifvalid_mail').innerHTML  =  " anything@anything.com يجب ادخال ايميل مناسب مثل";
        document.getElementById('ifvalid_mail').style.color= "red";
        mail_valid = false;
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

    if (pass2_form.value == pass_form.value && pass2_form.value.length != 0)
    {
        document.getElementById('ifvalid_pass2').innerHTML  = "";
        document.getElementById('ifvalid_pass2').style.color= "white";
        pass2_valid = true;
    }else
    {
        document.getElementById('ifvalid_pass2').innerHTML  = "كلمات المرور يجب ان تكون متطابقة";
        document.getElementById('ifvalid_pass2').style.color= "red";
        pass2_valid = false;
    }


    //Prevent sign in button from submitting data if not valid
    document.forms[0].onsubmit = function (e)
    {
        if (name_valid == false || id_valid == false|| mail_valid == false || 
            pass_valid == false || pass2_valid == false)
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
            document.getElementById('div_error').style.display         = "none";        
            document.getElementById('div_error').style.width           = "350px";        
            document.getElementById('div_error').style.backgroundColor = "white";        
            document.getElementById('p_error').innerHTML               = ""; 

            if (signupContainer.length>0)
            {
                let flag        = false;
                let signupArray = localStorage.getItem('signup_users');
                signupArray     = JSON.parse(signupArray);
    
                for (let i = 0; i < signupArray.length; i++)
                {
                    if (id_form.value == signupArray[i].id_form)
                    {            
                        flag=true;
                    }
                }
                
                if (flag==false || signupArray.length==0)
                {
                    addSignUpUser();
                }else
                {
                    //print error
                    e.preventDefault(); //prevent submitting here

                    document.getElementById('signup_error').style.display        = "flex";        
                    document.getElementById('signup_error').style.width          = "350px";        
                    document.getElementById('signup_error').style.backgroundColor= "#fed018";
                    document.getElementById("signup_p_error").innerHTML          = "This user already exists";

                }

            }else
            {
                addSignUpUser();
            }
            
        } 
    }

}
