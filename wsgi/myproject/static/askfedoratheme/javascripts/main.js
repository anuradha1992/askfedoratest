var toggle_comment_count = true;


//function toggleMenu() {
   //$("#pop-up-menu").fadeToggle();
//}




$(document).ready(function() {

        $('#showmenu').click(function() {
                $('.menu').toggle("slide");
        });

        
        $('#simple-menu-back').sidr();
        $('#simple-menu-front').sidr();

        $('#comment-text-1').click(function() {
               	jQuery(this).text('view comments');
                if($('#collapsible-comment-1').is(':visible')){
			          jQuery(this).text('view comments');
			    }else{
			          jQuery(this).text('hide comments');
			    }
                $('#collapsible-comment-1').slideToggle("fast");
                return false;
        });

        $('#comment-text-2').click(function() {
        		jQuery(this).text('view comments');
                if($('#collapsible-comment-2').is(':visible')){
			          jQuery(this).text('view comments');
			    }else{
			          jQuery(this).text('hide comments');
			    }
                $('#collapsible-comment-2').slideToggle("fast");
                return false;
        });

        $('#comment-text-3').click(function() {
                jQuery(this).text('view comments');
                if($('#collapsible-comment-3').is(':visible')){
			          jQuery(this).text('view comments');
			    }else{
			          jQuery(this).text('hide comments');
			    }
                $('#collapsible-comment-3').slideToggle("fast");
                return false;
        });
	    
});