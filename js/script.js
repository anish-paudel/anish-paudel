$(document).ready(function(){
   alert("welcome to my website 🙏");
    $(".menu-button").click(function(){
    $(".menu-bar").toggleClass( "open" );
    })
    });

    $(document).ready(function()
    {
      $('#Menu').hide();
      $('#show').on('click',function(){
         $('#Menu').show(1000);
         $('#Icons').hide(1000);
   
      })
      $('#hide').on('click',function(){
         $('#Menu').hide(1000);
         $('#Icons').show(1100);
   
      })
      $(window).resize(function() {
         var width = $(window).width();
         if (width < 500){
            $('#Menu').show(4);
          
         }
       });

    });

//google translate


    function googleTranslateElementInit() {
      new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    };

    // scroll up
    window.addEventListener("scroll", function () {
   
      var header = document.querySelector("header");
      
      header.classList.toggle("fixed", window.scrollY)
    }
    );