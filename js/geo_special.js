$(document).ready(function(){  // SO the ready
   //set cookies
   function setCookie(c_name,value,exdays)
	{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays== null ) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value +"; path=/";
	}
   //get cookies
  function getCookie(c_name)
	{
	   var i,x,y,ARRcookies=document.cookie.split(";");
	   for (i=0;i<ARRcookies.length;i++)
	    {
	       x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	          y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	          x=x.replace(/^\s+|\s+$/g,"");
	          if (x==c_name)
	          {
	              return unescape(y);
	          }
	    }
	 } 
   $.get("//freegeoip.net/json/?callback=?", function (response) {
   
     var country =  response.country_code;
     //get country zone
	//var country = geoplugin_countryCode(); 
    if(country){
    	console.log('access from : '+ country);
    	//removed slider if country code is not match with visitor
    	$('.bannerfor:not(.'+country+'):not(.Any)').remove();  
    	$('.bannerfor.Any.'+country).remove(); 
    }

     
    if(getCookie('members'))
    {  
    	 
        if(getCookie('visited'))
	    { 
	     $('.bannerfor:not(.Return):not(.All):not(.Members)').remove();  
	    }else
	    {  
	    $('.bannerfor:not(.All):not(.New):not(.Members)').remove(); 	
	     setCookie('visited',1,365);
	    }
    }else
    {
       if(getCookie('visited'))
	    { 
	     $('.bannerfor:not(.Return):not(.All):not(.Non-Members)').remove();  
	    }else
	    {  
	    $('.bannerfor:not(.All):not(.New):not(.Non-Members)').remove(); 	
	     setCookie('visited',1,365);
	    }
     
    }  
    }, "jsonp");
 

});//end ready


 