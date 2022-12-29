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


if (JSON.parse(localStorage.getItem('signin_users') == null))
{
    //if signout or not signin, display error div;
    document.getElementById('sign_error').style.display        = "flex";        
    document.getElementById('sign_error').style.width          = "350px";               
    document.getElementById('sign_error').style.backgroundColor= "#fed018";
    document.getElementById('sign_error').style.border         = "5px solid black";
    document.getElementById('sign_error').style.boxShadow      = `5px 5px 0px black`;
    document.getElementById('sign_p_error').innerHTML          = "برجاء تسجيل الدخول اولا"; 

    //display none to form and table of requests.
    document.getElementById('form_complain').style.display     = "none"; 
    document.getElementById('allComplains').style.display      = "none";   
    
}else
{

        let id_form            = document.getElementById('id_form');
        let messageType_form   = document.getElementById('messageType_form');
        let message_form       = document.getElementById('message_form');

        var complainContainer = []
        var updateIndex      = 0;
        var updateFlag       = 0;

        var add_id           = document.getElementById('add_id');
        var update_id        = document.getElementById('update_id');

        if ( localStorage.getItem('complains') != null )
        {
            complainContainer = JSON.parse(localStorage.getItem('complains')); //convert string to object
            displayComplain();
        }

        function addComplain()
        {   
            var complain =
            {
                id_form  : id_form.value,        
                messageType_form: messageType_form.value,
                message_form: message_form.value,        
            }
                
            complainContainer.push(complain);

            localStorage.setItem('complains', JSON.stringify(complainContainer) ); //convert object to string
            displayComplain();
            clearComplain();

        }

        function displayComplain()
        {
            cartona=``;
            for (var i=0; i < complainContainer.length; i++)
            {
                cartona+=`<tr>
                            <td>${i+1}</td>
                            <td>${complainContainer[i].id_form}</td>
                            <td>${complainContainer[i].messageType_form}</td>
                            <td>${complainContainer[i].message_form}</td>                  
                            <td><button class="btn myButton" onclick="deleteComplain(${i})">مسح الرسالة</button></td>
                            <td><button class="btn myButton" onclick="updateForm(${i})">تعديل الرسالة</button></td>
                            
                        </tr>`;
            }

            document.getElementById('tbody').innerHTML = cartona;
        }

        function clearComplain()
        {
        id_form.value           = '';
        messageType_form.value  = '';
        message_form.value      = '';
        }

        function deleteComplain(i)
        {
            complainContainer.splice(i,1);
            localStorage.setItem('complains', complainContainer); //convert object to string
            displayComplain();
        }

        function searchComplain(term)
        {
            cartona=``;

            for (var i= 0; i < complainContainer.length; i++)
            {
                if (complainContainer[i].name.toLowerCase().includes(term.toLowerCase()))
                {
                    cartona+=`<tr>
                            <td>${i}</td>
                            <td>${complainContainer[i].id_form}</td>
                            <td>${complainContainer[i].messageType_form}</td>
                            <td>${complainContainer[i].message_form}</td>                  
                            <td><button class="btn myButton" onclick="deleteComplain(${i})">مسح الرسالة</button></td>
                            <td><button class="btn myButton" onclick="updateForm(${i})">تعديل الرسالة</button></td>
                                            
                        </tr>`;
                }        
            }

            document.getElementById('tbody').innerHTML = cartona;
        }


        function updateForm(id)
        {
            updateIndex = id;
            updateFlag  = 1; //Flag that we press "update" button not "update complain" button

            //in order to make the input
            document.getElementById('id_form').value         = complainContainer[id].id_form;
            document.getElementById('messageType_form').value= complainContainer[id].messageType_form;
            document.getElementById('message_form').value    = complainContainer[id].message_form;

            document.getElementById("add_id").style.display   ="none";
            document.getElementById("update_id").style.display="flex";

            document.getElementById('id_form').focus();
            
        }

        function updateComplain()
        {
            complainContainer[updateIndex].id_form           = document.getElementById('id_form').value ;
            complainContainer[updateIndex].messageType_form  = document.getElementById('messageType_form').value;
            complainContainer[updateIndex].message_form      = document.getElementById('message_form').value;
            
            localStorage.setItem('complains' , JSON.stringify(complainContainer));
            displayComplain();
            clearComplain();

            document.getElementById("add_id").style.display   ="flex";
            document.getElementById("update_id").style.display="none";
        
        }

        function validateComplain()
        {      
            
            let message_regex  = /^[\u0621-\u064A ]+$/    //has only arabic letters+spaces: Numbers are not allowed

            let id_regex       = /^[0-9]*$/                    //has only english numbers //28809201404007

            let id_valid       = false;
            let message_valid  = false;

            if (message_regex.test(message_form.value) == true && message_form.value.length>0) //Not Empty
            {
                document.getElementById('ifvalid_message').innerHTML  = "";
                document.getElementById('ifvalid_message').style.color= "white";
                message_valid = true;
            }else
            {
                document.getElementById('ifvalid_message').innerHTML  = "يسمح بادخال حروف عربية فقط لا يقل طولها عن 1 حرف";
                document.getElementById('ifvalid_message').style.color= "red";
                message_valid = false;
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


            //Prevent sign in button from submitting data if not valid
            document.forms[0].onsubmit = function (e)
            {
                if (id_valid === false || message_valid === false)
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

                    //
                    addComplain()
                } 
            }

        }
        
}