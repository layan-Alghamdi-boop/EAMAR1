//النافذة المنبثقة للبطاقات//

function openImage (imgElement) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("fullImage").src= imgElement.src;
   
}
 function closeImage() {
    document.getElementById("imageModal").style.display = "none";
 }

//تمرير الصفحة//
 document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".hidden");
    function checkVisibility() {
        
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            let windowHeight = window.innerHeight ;
            if (rect.top < windowHeight - 100) {
                el.classList.add("visible");
               

            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

//تمرير الصفحة//
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".backdround");
    function checkVisibility() {
        
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            let windowHeight = window.innerHeight ;
            if (rect.top < windowHeight - 100) {
                el.classList.add("visible");
               

            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

//تمرير الصقحة//
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".about-us");
    function checkVisibility() {
        
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            let windowHeight = window.innerHeight ;
            if (rect.top < windowHeight - 100) {
                el.classList.add("visible");
               

            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

//تمرير الصفحة//
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".hiddin-content");
    let lastVisibleIndex = -1; 

    function checkVisibility() {
        let delay = 0;
        
        cards.forEach((card, index) => {
            let rect = card.getBoundingClientRect();
            let windowHeight = window.innerHeight ;
          
            if (rect.top < windowHeight - 100 && !card.classList.contains("visible") && index > lastVisibleIndex) {
                lastVisibleIndex = index;

                setTimeout(() => {
                    card.classList.add("visible");
                 
                   
                }, delay);
                delay += 300;
               
               

            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resive", checkVisibility);
    checkVisibility();
});

//تمرير الصفحة//
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".section-feature");
    function checkVisibility() {
        
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            let windowHeight = window.innerHeight ;
            if (rect.top < windowHeight - 100) {
                el.classList.add("visible");
               

            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

//تمرير الصفحة//
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".Videos");
    function checkVisibility() {
        
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            let windowHeight = window.innerHeight ;
            if (rect.top < windowHeight - 100) {
                el.classList.add("visible");
               

            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});


document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".slide");
    function checkVisibility() {
        
        elements.forEach(el => {
            let rect = el.getBoundingClientRect();
            let windowHeight = window.innerHeight ;
            if (rect.top < windowHeight - 100) {
                el.classList.add("visible");
               

            }
        });
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});