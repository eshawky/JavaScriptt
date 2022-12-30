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
    document.getElementById('form_follow').style.display       = "none"; 
    document.getElementById('allFollows').style.display        = "none";  

}
else
{
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


        let id_form           = document.getElementById('id_form');
        let code_form         = document.getElementById('code_form');

        var followContainer = []
        var updateIndex      = 0;
        var updateFlag       = 0;

        var add_id           = document.getElementById('add_id');
        var update_id        = document.getElementById('update_id');

        if ( localStorage.getItem('follows') != null )
        {
            followContainer = JSON.parse(localStorage.getItem('follows')); //convert string to object
            displayFollow();
        }

        function addFollow()
        {   
            
            var follow =
            {
                id_form  : id_form.value,        
                code_form: code_form.value,
            }
                
            followContainer[0]= follow;

            localStorage.setItem('follows', JSON.stringify(followContainer) ); //convert object to string
            displayFollow();
            clearFollow();

        }

        function displayFollow()
        {
            let flag = false;
            let requests = localStorage.getItem('requests');
            requests     = JSON.parse(requests);

            cartona=``;
            for (var i=0; i < requests.length; i++)
            {
                
                if (requests[i].id_form == followContainer[0].id_form && requests[i].code == followContainer[0].code_form)
                {
                    cartona+=`<tr>
                            <td>${i+1}</td>
                            <td>${requests[i].id_form}</td>
                            <td>${requests[i].code}</td>
                            <td>لقد تم رفض طلبك</td>                    
                            
                        </tr>`;
                    flag=true;
                }
                
            }

            if (flag==false)
            {
                document.getElementById('follow_error').style.display      = "flex";     
                document.getElementById('allFollows').style.display        = "none";     
   
                document.getElementById('follow_error').style.width          = "350px";               
                document.getElementById('follow_error').style.backgroundColor= "#fed018";
                document.getElementById('follow_error').style.boxShadow      = `5px 5px 0px black`;
                document.getElementById('follow_p_error').innerHTML          = "لم يتم طلب بهذه البيانات "; 

            }else
            {
                document.getElementById('tbody').innerHTML = cartona;
                document.getElementById('follow_error').style.display        = "none";     
            }

        }

        /*
        <td>لقد تم رفض طلبك</td>                    
        <td>  تمت الموافقه علي طلبك</td>
        <td>جاري اجراءات الطلب في الجهات المسؤولة</td>
        */    

        function clearFollow()
        {
            name_form.value         = '';
            id_form.value           = '';
            mail_form.value         = '';
            pass_form.value         = '';
            governorate_form.value  = '';
            section_form.value      = '';
            area_form.value         = '';
        }

        function deleteFollow(i)
        {
            followContainer.splice(i,1);
            localStorage.setItem('follows', followContainer); //convert object to string
            displayFollow();
        }

        function updateForm(id)
        {
            updateIndex = id;
            updateFlag  = 1; //Flag that we press "update" button not "update follow" button

            //in order to make the input
            document.getElementById('id_form').value         = followContainer[id].id_form;
            document.getElementById('code_form').value       = followContainer[id].code_form;

            document.getElementById("add_id").style.display   ="none";
            document.getElementById("update_id").style.display="flex";

            document.getElementById('id_form').focus();
            
        }

        function updateFollow()
        {
            followContainer[updateIndex].id_form    = document.getElementById('id_form').value ;
            followContainer[updateIndex].code_form  = document.getElementById('code_form').value;
            localStorage.setItem('follows' , JSON.stringify(followContainer));
            displayFollow();
            clearFollow();

            document.getElementById("add_id").style.display   ="flex";
            document.getElementById("update_id").style.display="none";
        
        }

        function validateFollow()
        {      
            let code_regex  = /\s/                     //has no space: check by != true
            let id_regex    = /^[0-9]*$/               //has only english numbers //28809201404007
        
            let id_valid    = false;
            let code_valid  = false;

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

            if (code_form.value.length>0 && code_regex.test(code_form.value) != true)
            {
                document.getElementById('ifvalid_code').innerHTML  = "";
                document.getElementById('ifvalid_code').style.color= "white";
                code_valid = true;
            }else
            {
                document.getElementById('ifvalid_pass').innerHTML  = "برجاء ادخال كود صحيح";
                document.getElementById('ifvalid_pass').style.color= "red";
                code_valid = false;
            }

            //Prevent sign in button from submitting data if not valid
            document.forms[0].onsubmit = function (e)
            {
                if (code_valid == false || id_valid == false)
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
                    
                    //Add follow to local storage
                    addFollow();
                } 
            }

        }

}        