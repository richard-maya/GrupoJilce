$(document).on("scroll",function(){if($(document).scrollTop()>50){$(".navbar").addClass("navbar-small");}else{$(".navbar").removeClass("navbar-small");}});var scroll=new SmoothScroll('a[href*="#"]',{speed:1000,easing:"easeInOutQuint"});var wow=new WOW({offset:-20,mobile:false});$(document).ready(function(){wow.init();$("p:not(.success-message)").addClass("wow fadeInUp");$("p.success-message").addClass("wow zoomIn");$("h6").addClass("wow fadeInUp");$("h5").addClass("wow fadeInUp");$("h4").addClass("wow fadeInUp");$("h3").addClass("wow fadeInUp");$("h2").addClass("wow fadeInUp");$("h1").addClass("wow fadeInUp");$("button.btn-white-outline").addClass("wow fadeInUp");$("form").addClass("wow fadeInLeft");$("li:not(.nav-item)").addClass("wow fadeInUp");$("i.fa-facebook-square").addClass("wow fadeInUp");$("i.fa-twitter").addClass("wow fadeInUp");var a=document.location.search;if(a.includes("success")){$("#message-modal").modal("show");}});$(document).on("blur","[data-validator]",function(){new Validator($(this),{language:{required:"Éste campo es requerido.",email:"Ingresa un correo válido.",between:"Ingresa un número válido."}});if($("#nombre").hasClass("is-valid")&&$("#correo").hasClass("is-valid")&&$("#mensaje").hasClass("is-valid")){$("#submit").removeAttr("disabled","disabled");}});