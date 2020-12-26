$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["IT Support", "Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["IT Support", "Web Developer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // Disable paste
(function () {
    var onload = window.onload;
      window.onload = function () {
        if (typeof onload == "function") {
          onload.apply(this, arguments);
        }
        var fields = [];
        var inputs = document.getElementsByTagName("input");
        var textareas = document.getElementsByTagName("textarea");
    
        for (var i = 0; i < inputs.length; i++) {
          fields.push(inputs[i]);
        }
    
        for (var i = 0; i < textareas.length; i++) {
          fields.push(textareas[i]);
        }
    
        for (var i = 0; i < fields.length; i++) {
          var field = fields[i];
    
          if (typeof field.onpaste != "function" && !!field.getAttribute("onpaste")) {
            field.onpaste = eval("(function () { " + field.getAttribute("onpaste") + " })");
          }
    
          if (typeof field.onpaste == "function") {
            var oninput = field.oninput;
            field.oninput = function () {
              if (typeof oninput == "function") {
                oninput.apply(this, arguments);
              }
    
              if (typeof this.previousValue == "undefined") {
                this.previousValue = this.value;
              }
    
              var pasted = (Math.abs(this.previousValue.length - this.value.length) > 1 && this.value != "");
              if (pasted && !this.onpaste.apply(this, arguments)) {
                this.value = this.previousValue;
              }
              this.previousValue = this.value;
            };
    
            if (field.addEventListener) {
              field.addEventListener("input", field.oninput, false);
            } else if (field.attachEvent) {
              field.attachEvent("oninput", field.oninput);
            }
          }
        }
      }
    })();

// disable Right Click
  jQuery(document).ready(function(){
    jQuery(function() {
      jQuery(this).bind("contextmenu", function(event) {
          event.preventDefault();
          // alert('Right click disable in this site!!')
      });
    });
  });
  document.onkeydown = function(e) {
      if(e.keyCode == 123) {
       return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
       return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
       return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
       return false;
      }
  
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
       return false;
      }      
   }

});

// link cv
$("#resume").click(function() {
    window.open(
    'https://pdfhost.io/v/IeNo0K1YV_Resumepdf.pdf',
    '_blank'
    );
});

function validateForm() {
    var inputForm = document.forms["messageForm"]["name"].value;

    if (inputForm == "") {
        document.getElementById("name").required = true;
    }
    var inputForm = document.forms["messageForm"]["email"].value;
    if (inputForm == "") {
        document.getElementById("email").required = true;
    }
    var inputForm = document.forms["messageForm"]["subject"].value;
    if (inputForm == "") {
        document.getElementById("message").required = true;
    }
    var inputForm = document.forms["messageForm"]["message"].value;
    if (inputForm == "") {
        document.getElementById("message").required = true;
    }
}

function validateForm() {
    var name = document.forms["messageForm"]["name"].value;
    var email = document.forms["messageForm"]["email"].value;
    var subject = document.forms["messageForm"]["subject"].value;
    var message = document.forms["messageForm"]["message"].value;
    
    if (name == "") {
        document.getElementById("name").required = true;
    }if(email == ""){
        document.getElementById("email").required = true;    
    }if(subject == ""){
        document.getElementById("subject").required = true;
    }if(message == ""){
        document.getElementById("message").required = true;
    }else{
        // document.getElementById('action').action = "https://script.google.com/macros/s/AKfycbxWlklLKusSFat-Ughl80iMYAcLw52xtjeYRbtk3g/exec";
        $('#action').submit(function(e){
            e.preventDefault();
            data = $(this).closest('form').serialize();
            $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbxWlklLKusSFat-Ughl80iMYAcLw52xtjeYRbtk3g/exec',
                type: 'post',
                data:data,
                success:function(){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Message has been send',
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            });
        });
    }
}