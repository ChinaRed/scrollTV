$(document).ready(function(){
  
  var obj = document.createElement("audio");
  obj.setAttribute("src", "/audio/channelchange.wav");
        
  $.get();

  $(".getpos").click(function(){
    var container = $(".content_container");
    var left = container.scrollLeft();
    var top = container.scrollTop();
    $("p").html("Left: " + left + " Top: " + top);
    return false;
  });

  $(".b1").click(function(){
    var reset = $(".content_container");
    obj.play();
    reset.animate({scrollLeft : 0, scrollTop : 0 }, '500', 'swing', function() {   
    });
    return false;
  });


  $(".b2").click(function(){
    obj.play();
    var container = $(".content_container");
    container.animate({scrollLeft : 404, scrollTop : 0 }, '500', 'swing', function() {   
    });
    return;
  });

  $(".b3").click(function(){
    obj.play();
    var container = $(".content_container");
    container.animate({scrollLeft : 808, scrollTop : 0 }, '500', 'swing', function() {   
    });
    return;
  });

  $(".b4").click(function(){
    obj.play();
    var container = $(".content_container");
    container.animate({scrollLeft : 1212, scrollTop : 0 }, '500', 'swing', function() {   
    });
    return;
  });

  $(".b5").click(function(){
    obj.play();
    var container = $(".content_container");
    container.animate({scrollLeft : 0, scrollTop : 400 }, '500', 'swing', function() {   
    });
    return;
  });

  $(".b6").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 404, scrollTop : 400 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b7").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 808, scrollTop : 400 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b8").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 1212, scrollTop : 400 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b9").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 0, scrollTop : 800 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b10").click(function(){
  var container = $(".content_container");
  obj.play();
  container.animate({scrollLeft : 404, scrollTop : 800 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b11").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 808, scrollTop : 800 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b12").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 1212, scrollTop : 800 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b13").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 0, scrollTop : 1200 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b14").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 404, scrollTop : 1200 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b15").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 808, scrollTop : 1200 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b16").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 1212, scrollTop : 1200 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b17").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 1616, scrollTop : 0 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b18").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 1616, scrollTop : 400 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b19").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 1616, scrollTop : 800 }, '500', 'swing', function() {   
  });
  return;
  });

  $(".b20").click(function(){
  obj.play();
  var container = $(".content_container");
  container.animate({scrollLeft : 1616, scrollTop : 1200 }, '500', 'swing', function() {   
  });
  return;
  });


});