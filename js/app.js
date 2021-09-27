// Start Navbar
// for navbutton
const navbuttons = document.querySelector('.navbuttons');
// console.log('hay');
navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));
// for navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    // console.log('hay');
    if (getscrolly >= 200){
        navbar.classList.add('navmenus');
    }else {
        navbar.classList.remove('navmenus');

    }
});
// End Navbar

// Start Gallery Selection
const galleryLists = document.querySelectorAll('.gallerylists');
const filternews = document.querySelectorAll('.filters.new'),
    filterfrees = document.querySelectorAll('.filters.free'),
    filterpros = document.querySelectorAll('.filters.pro');

galleryLists.forEach((galleryList)=>{
    // console.log(galleryList);

    galleryList.addEventListener('click',(e)=>{
        let datafilter = galleryList.getAttribute('data-filter');
        // console.log(datafilter);

        removeactiveitem();
        e.target.classList.add('activeitems');
        if (datafilter === "all"){

        }else if(datafilter === "new"){


            filternews.forEach(filternew=>{
                filternew.style.display="inline-block";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display="none";
            });

            filterpros.forEach(filterpro=>{
                filterpro.style.display="none";
            });

        }else if(datafilter === "free"){


            filternews.forEach(filternew=>{
                filternew.style.display="none";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display= "inline-block";
            });
            filterpros.forEach(filterpro=>{
                filterpro.style.display= "none";
            });
        }else {

            filternews.forEach(filternew=>{
                filternew.style.display="none";
            });

            filterfrees.forEach(filterfree=>{
                filterfree.style.display= "none";
            });
            filterpros.forEach(filterpro=>{
                filterpro.style.display= "inline-block";
            });
        }
    })
});


// remove current active item
function removeactiveitem() {
    galleryLists.forEach(galleryList=>{
        galleryList.classList.remove('activeitems');
    });
}
// End Gallery Selection

// Start Footer Section
const showyear = document.getElementById('showyear');
const getfullyear = new Date().getUTCFullYear();
showyear.textContent = getfullyear;

// End Footer Section