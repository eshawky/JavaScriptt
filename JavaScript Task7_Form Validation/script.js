var name_form  = document.getElementById('name_form');
var mail_form  = document.getElementById('mail_form');
var pass_form  = document.getElementById('pass_form');

var validationFlag = 0;

function validateInputs()
{        
    /*
        Name: ahmeD_moHamed  : capita+small+special no numbers
        mail: lst@jfhygj.com : anything@anything.com
        password: ahmed_123  :  anything ///a-zA-Z0-9!@#\$%\^\&*\)\(+=._-/g
    
        Valid conditions are:
        regex_name.test(name_form.value) == true 
        name_form.value!='' 

        regex_mail.test(mail_form.value) == true
        mail_form.value!=''
 
        regex_pass.test(pass_form.value) == true 
        pass_form.value!=''
    */

    var regex_name  = /[0-9]/         //has no number: check by != true
    var regex_mail  = /\w@\w.(com|)/  //anything@anything.com    
    var regex_pass  = /\s/            //has no space: check by != true
    
    var valid_name  = false;
    var valid_mail  = false;
    var valid_pass  = false;
    
    if (regex_name.test(name_form.value) != true && name_form.value.length!=0)
    {
        document.getElementById('ifvalid_name').innerHTML  = "";
        document.getElementById('ifvalid_name').style.color= "white";
        valid_name = true;
    }else
    {
        document.getElementById('ifvalid_name').innerHTML  = "Allowed only capital or small letters +special characters. Numbers are not allowed.";
        document.getElementById('ifvalid_name').style.color= "red";
        valid_name = false;
    }

    if (regex_mail.test(mail_form.value) == true)
    {
        document.getElementById('ifvalid_mail').innerHTML  = "";
        document.getElementById('ifvalid_mail').style.color= "white";
        valid_mail = true;
    }else
    {
        document.getElementById('ifvalid_mail').innerHTML  = "Please enter a valid email: anything@anything.com";
        document.getElementById('ifvalid_mail').style.color= "red";
        valid_mail = false;
    }

    if (pass_form.value.length>=4 && pass_form.value.length<=10 && regex_pass.test(pass_form.value) != true)
    {
        document.getElementById('ifvalid_pass').innerHTML  = "";
        document.getElementById('ifvalid_pass').style.color= "white";
        valid_pass = true;
    }else
    {
        document.getElementById('ifvalid_pass').innerHTML  = "Must enter a combination of capital and small letters +special characters+ Numbers with maximum length 8 letters, and minimum 3 letters.";
        document.getElementById('ifvalid_pass').style.color= "red";
        valid_pass = false;
    }

    //Prevent sign in button from submitting data if not valid
    document.forms[0].onsubmit = function (e)
    {
        if (valid_name === false || valid_mail === false || valid_pass === false)
        {
            e.preventDefault(); //prevent submitting here

            //Update CSS to show alert message to all
            document.getElementById('div_error').style.display= "flex";        
            document.getElementById('div_error').style.width= "350px";        
            document.getElementById('div_error').style.backgroundColor= "yellow";        

            document.getElementById('p_error').innerHTML    = "Please correct all red comments below..";            
        }else
        {
            document.getElementById('div_error').style.display= "none";        
            document.getElementById('div_error').style.width= "350px";        
            document.getElementById('div_error').style.backgroundColor= "white";        
            document.getElementById('p_error').innerHTML    = "";  
        } 
    }

}
