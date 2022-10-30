var name2  = document.getElementById('name');
var mail   = document.getElementById('mail');
var sid    = document.getElementById('sid');
var year   = document.getElementById('year');

var studentContainer = []
var updateIndex      = 0;
var updateFlag       = 0;

var add_id        = document.getElementById('add_id');
var update_id     = document.getElementById('update_id');

if ( localStorage.getItem('students') != null )
{
    studentContainer = JSON.parse(localStorage.getItem('students')); //convert string to object
    displayStudent();
}

function addStudent()
{
    var student =
    {
        name: name2.value,
        mail: mail.value,
        sid: sid.value,
        year: year.value,
    }
        
    studentContainer.push(student);

    localStorage.setItem('students', JSON.stringify(studentContainer) ); //convert object to string
    displayStudent();
    clearStudent();

}

function displayStudent()
{
    cartona=``;
    for (var i=0; i < studentContainer.length; i++)
    {
        cartona+=`<tr>
                    <td>${i}</td>
                    <td>${studentContainer[i].name}</td>
                    <td>${studentContainer[i].mail}</td>
                    <td>${studentContainer[i].sid}</td>
                    <td>${studentContainer[i].year}</td>
                    <td><button class="btn" onclick="deleteStudent(${i})">Delete</button></td>
                    <td><button class="btn" onclick="updateForm(${i})">Update</button></td>
                    
                  </tr>`;
    }

    document.getElementById('tbody').innerHTML = cartona;

}
    
function clearStudent()
{
   name2.value = '';
   mail.value  = '';
   sid.value   = '';
   year.value  = '';
}

function deleteStudent(i)
{
    studentContainer.splice(i,1);
    localStorage.setItem('students', studentContainer); //convert object to string
    displayStudent();

}

function searchStudent(term)
{
    cartona=``;

    for (var i= 0; i < studentContainer.length; i++)
    {
        if (studentContainer[i].name.toLowerCase().includes(term.toLowerCase()))
        {
            cartona+=`<tr>
                    <td>${i}</td>
                    <td>${studentContainer[i].name}</td>
                    <td>${studentContainer[i].mail}</td>
                    <td>${studentContainer[i].sid}</td>
                    <td>${studentContainer[i].year}</td>
                    <td><button class="btn" onclick="deleteStudent(${i})">Delete</button></td>
                    <td><button class="btn" onclick="updateForm(${i})">Update</button></td>
                    
                  </tr>`;
        }        
    }

    document.getElementById('tbody').innerHTML = cartona;
}


function updateForm(id)
{
    updateIndex = id;
    updateFlag  = 1; //Flag that we press "update" button not "update student" button

    //in order to make the input
    document.getElementById('name').value     = studentContainer[id].name;
    document.getElementById('mail').value     = studentContainer[id].mail;
    document.getElementById('sid').value      = studentContainer[id].sid;
    document.getElementById('year').value     = studentContainer[id].year;

    document.getElementById("add_id").style.display="none";
    document.getElementById("update_id").style.display="flex";
}

function updateStudent()
{
    studentContainer[updateIndex].name    = document.getElementById('name').value;
    studentContainer[updateIndex].mail    = document.getElementById('mail').value ;
    studentContainer[updateIndex].sid     = document.getElementById('sid').value;
    studentContainer[updateIndex].year    = document.getElementById('year').value;

    localStorage.setItem('students' , JSON.stringify(studentContainer));
    displayStudent();
    clearStudent();

    document.getElementById("add_id").style.display   ="flex";
    document.getElementById("update_id").style.display="none";
 
}
