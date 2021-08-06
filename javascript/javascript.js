/**=============== Sticky Navigation ======================= */
let nav_offset_top = $('#pcNavigation').height()+50;
function navbarFixed() {
    if ($('#pcNavigation').length) 
    {
        $(window).scroll(function () 
        {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('#pcNavigation .navbar').addClass('pc-sticky');
            } 
            
            else
            {
                $('#pcNavigation .navbar').removeClass('pc-sticky');
            }
        })
    }
}
navbarFixed();
/**================= Sticky Navigation ======================== */



/*=========================== Owl Carousele ====================================*/
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items:1,      
      margin:10,     
      loop:true,      
      center:true,     
      mouseDrag:false,
      touchDrag:false,
      autoplay:true,
      animateIn:'fadeIn',
      animateOut:'fadeOut'
    })
})
/**========================== Owl Carousele ==================================== */



/** ========================= Filterbale Gallary ================================= */
function w3AddClass(element, name) 
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
}  
function w3RemoveClass(element, name) 
{
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
}

filterSelection("all",'initial');
function filterSelection(classes,clickedID)
{
  var x, i;

  // Getting classes of all containers
  x = document.getElementsByClassName("us-gal-container");

  if (classes == "all") 
  {
    classes = "";
  }

  for (i = 0; i < x.length; i++) 
  {
    w3RemoveClass(x[i], "us-show");
    if (x[i].className.indexOf(classes) > -1) // if class found then add show in it
    {
        if(i%2==0)
        {
            w3AddClass(x[i], "us-show additionHeight");
        }
        else
        {
            w3AddClass(x[i], "us-show");
        }
    }
  }

  filterGalleryActive(clickedID);


}

function filterGalleryActive(clickedID)
{
    var i,btn_container,btn_container_elements,clicked;
    if(clickedID=="initial")
    {
        return;
    }

    // Getting classes of all the buttons
    btn_container =document.getElementById("us-gal-button-container");
    btn_container_elements=btn_container.getElementsByClassName("us-gal-link");
    clicked=document.getElementById(clickedID);

    for (i = 0; i < btn_container_elements.length ;i++) 
    {
        w3RemoveClass(btn_container_elements[i], "us-gal-link-active");
    }

    w3AddClass(clicked,"us-gal-link-active");
}
// popup
$(document).ready(function() {
	$('.gallery-contain').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Muhammad Usama</small>';
			}
    },
    disableOn: function() {
      if( $(window).width() < 600 ) {
        return false;
      }
      return true;
    }
	});
});
/** ========================= Filterable Gallary ================================= */