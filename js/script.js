$(document).ready(function(){

  $(".name a").hover(function(){
    $(this).next().slideDown();
  });

  $(".name a").mouseleave(function(){
    $(this).next().slideUp();
  });

});

$(document).ready(function() {

	// when a nav parent is clicked
	$("nav .menu").click(function() {
    var $ul = $(this).parent("nav").children("ul");
		// if section is already active and clicked again
		if ( $ul.hasClass("menu-click") ) {
			$ul.removeClass("menu-click");
			$ul.slideUp();
		} else {
		// if section is made active
			$ul.addClass("menu-click");
			$ul.slideDown();
			return false;
		}
	}); // end click event handler
});
$(document).ready(function() {

	// when a nav parent is clicked
	$(".nav2 .menu").click(function() {
    var $ul = $(this).parent(".nav2").children("ul");console.log("123");
		// if section is already active and clicked again
		// if ( $ul.hasClass("menu-click") ) {
		// 	$ul.removeClass("menu-click");
		// 	$ul.slideUp();
    //   console.log("123");
		// } else {
		// // if section is made active
		// 	$ul.addClass("menu-click");
		// 	$ul.slideDown();
		// 	return false;
		// }
	}); // end click event handler
});
