let images = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg", "./img/4.jpg", "./img/5.jpg", "./img/6.jpg"]

let images_new = images.map( (image)=> 
                    `<div class="col-md-3">                
                            <div class="image">
                                <img class="w-100" src=${image} alt="">
                            </div>
                    
                     </div>`);

document.getElementById('row').innerHTML = images_new;
