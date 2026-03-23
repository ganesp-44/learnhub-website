let courselist = [];
fetch("courses.xml")
.then(Response => Response.text())
.then(data =>
    {
        let parser= new DOMParser();
        let xml = parser.parseFromString(data , "application/xml");
        let c = xml.getElementsByTagName("course");
        let output="";

        for(let i=0  ; i<c.length; i++)
        {
            let title = c[i].getElementsByTagName("title")[0].textContent;
            let instructor = c[i].getElementsByTagName("instructor")[0].textContent;
            let price = c[i].getElementsByTagName("price")[0].textContent;
            let rating = c[i].getElementsByTagName("rating")[0].textContent;
            let concepts = c[i].getElementsByTagName("concepts")[0].textContent;
            
            courselist.push({title: title,
                instructor: instructor,
                price:price,
                rating:rating,
                concepts:concepts});
            

        }
    });

function showDetails(index){


    let co = courselist[index];

    let details = `
    <div class="course-card-dynamic">
    
    <h3>${co.title}</h3>
    
    <p><b>Instructor:</b> ${co.instructor}</p>
    
    <p>⭐ ${co.rating}</p>
    
    <p class="price">₹${co.price}</p>
    
    <p><b>Concepts:</b> ${co.concepts}</p>
    
    <button onclick="scrollToRegister()">Enroll Now</button>
    
    </div>
    `;
    document.getElementById("courseDetails").innerHTML = details;
        

        }
// Fade animation on scroll

const sections = document.querySelectorAll(".fade-section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

section.classList.add("show");

}

});

});


function validateForm(){

    let password=document.getElementById("password").value;
    let confirm=document.getElementById("confirm").value;
    
    if(password.length<6){
    
    alert("Password must be 6 characters");
    
    return false;
    
    }
    
    if(password!=confirm){
    
    alert("Passwords do not match");
    
    return false;
    
    }
    
    alert("Registration Successful");
    
    return true;
    
    }