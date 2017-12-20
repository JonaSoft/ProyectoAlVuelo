	//alert("Modulo Web de Vuelos Codeshare..Ya era hora...!!!");
   $(document).ready(function(){
			  ventanaAncho=$(window).width()

			  $("#contenido").hide().fadeIn(2000);
			   setTimeout(function () {
                  efectoMouse()
            },4500);
            //$("#logo").mouseout(restauraColor);

			  $(".titulo").draggable();
			  //$("#flecha").draggable();
			  //$(".papelera").draggable();
			  $(".papelera").droppable({
				  accept:".titulo",
				  drop: function(event, ui){
					  //$("#logo").fadeOut('slow')
					  //$("#flecha").empty()
            	setTimeout(function () {
               $('.papelera').effect('shake',500)
					$('.titulo').toggle('explode',2000);
					//$('.titulo').removeClass("nuevo");
                //$('.titulo').remove();
					}, 100);
					//$('.titulo').addClass("nuevo");
            	setTimeout(function () {
						//$('.papelera').effect('shake',200)

					}, 2000);
				  }
			  })
		$('#winBuscar').on('click',getFlight);
		function ventana(){
		var ventanaBuscar="width=500, height=300, top=250, left=500, scrollbars=no,toolbars=no";
		open("protoss.html","CodeShare",ventanaBuscar);
		}
      //scroll()
       $(window).scroll(function(){
            setTimeout(function () {
               $("#flecha").remove()
            }, 500);
       });
	  });

			   function efectoMouse(){
				  $("#logo").focus(animaLogo())
				}
			  function animaLogo(){
				  $("#flecha img").css("display","block");
				  $("#flecha").animate(
					 {
					  top:"20px"

					 },500,function(){
							  retorna()
						}
					 )
			  }
			  function retorna(){
				  $("#flecha").animate(
					{
					  top:"-20px"
					  },1000,function(){
							 animaLogo()
						 }
					  )
			  }
   function getFlight(){
      var fileFlight= document.getElementById('sponsor');
      var xmlhttp=new XMLHttpRequest();
      xmlhttp.onreadystatechange = function(){
         if (xmlhttp.readyState===4 && xmlhttp.status==200) {
           alert(xmlhttp.responseText)
           fileFlight.innerHTML=xmlhttp.responseText;
         }
      }
      xmlhttp.open("GET","data.txt",true);
      xmlhttp.send();
   }
