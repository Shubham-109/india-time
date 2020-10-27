$(document).ready(function(){
    
    $('.card-1').waypoint(function(direction){
       
       $('.card-1').addClass('animate__animated  animate__bounceInDown animate__slow  animate__delay-2s');    
	}, {
		offset:'60%'
	})

	$('.card-2').waypoint(function(direction){
       
       $('.card-2').addClass('animate__animated  animate__bounceInDown animate__slow ');    
	}, {
		offset:'60%'
	})

	$('.card-3').waypoint(function(direction){
       
       $('.card-3').addClass('animate__animated  animate__bounceInDown animate__slow animate__delay-1s');    
	}, {
		offset:'60%'
	})
    
	$('.anim-1-p1').waypoint(function(direction){
       
       $('.anim-1-p1').addClass('animate__animated  animate__fadeInDown animate__slow');    
	}, {
		offset:'60%'
	})


	$('.anim-1-p2').waypoint(function(direction){
       
       $('.anim-1-p2').addClass('animate__animated  animate__fadeInUp animate__slow');    
	}, {
		offset:'60%'
	})


	$('.anim-2-p1').waypoint(function(direction){
       
       $('.anim-2-p1').addClass('animate__animated  animate__fadeInLeft animate__slow');    
	}, {
		offset:'60%'
	})


	$('.anim-2-p2').waypoint(function(direction){
       
       $('.anim-2-p2').addClass('animate__animated  animate__fadeInRight animate__slow');    
	}, {
		offset:'60%'
	})

	$('.anim-start-1').waypoint(function(direction){
	       
	       $('.anim-start-1').addClass('animate__animated  animate__fadeInUp animate__slow');    
		}, {
			offset:'100%'
	})

	$('.anim-start-2').waypoint(function(direction){
	       
	       $('.anim-start-2').addClass('animate__animated  animate__fadeInUp animate__slow animate__delay-2s');    
		}, {
			offset:'100%'
	})

	$('.anim-start-3').waypoint(function(direction){
	       
	       $('.anim-start-3').addClass('animate__animated  animate__fadeInUp animate__slow  animate__delay-3s');    
		}, {
			offset:'100%'
	})

	$('.anim-start-r').waypoint(function(direction){
	       
	       $('.anim-start-r').addClass('animate__animated  animate__fadeInRight animate__slower  ');    
		}, {
			offset:'100%'
	})

});
