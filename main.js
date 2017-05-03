jQuery(document).ready(function($){

var setCurrentPage = function(url) {

    $('h2 span').html(url || "end of history");
    //$('h2 span').append(url || ":");

    //show some effect to identify the changes
    if(url){
      $("#menu-nav a[href='" + url + "']").css('color','red');
      $("#menu-nav a[href='" + url + "']").fadeTo(500, 1);
      $("#menu-nav a[href='" + url + "'] span").html("  &#65513");
    }
    //$("#menu-nav a span").replaceWith(">");
};

//when user click on the navbar link
$('#menu-nav a').click(function(e){
    e.preventDefault();
    var targetUrl = $(this).attr('href'),
        targetTitle = $(this).attr('title');
    console.log("BEFORE pathname1: " + window.location.pathname);

    //changing colour to indicate the current state
    $("#menu-nav a[href='" + window.location.pathname + "']").fadeTo(500, 0.6);
    $("#menu-nav a[href='" + window.location.pathname + "']").css('color','green');
    $("#menu-nav a[href='" + window.location.pathname + "'] span").html(" ");

    //pushing the URL into browser history
    window.history.pushState({url: "" + targetUrl + ""}, targetTitle, targetUrl);

    console.log("PUSHED pathname2: " + window.location.pathname);
    console.log("PUSHED to targetURL: "+ targetUrl + ", targetTitle: "+targetTitle);
    setCurrentPage(targetUrl);
});

//when Back Button is cicked - event fired when the active history entry changes
window.onpopstate = function(e) {

    //changing the color to light green when using Back Button
    $("#menu-nav a").fadeTo('fast', 0.5);
    $("#menu-nav a").css('color','#96be42');
    $("#menu-nav a span").html("");

    //If the history exists, we pop the URL
    if(e.state){
      console.log("POP to URL:" + e.state.url);
    }else {
      console.log("NO MORE PAGE TO POP");
    }

    setCurrentPage(e.state ? e.state.url : null);
};

});
