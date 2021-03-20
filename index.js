function HomeOpen() {
    window.open("https://www.quincyscp.ga/")
  }
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 900) {
        $(".navbar").css("background" , "rgb(9, 9, 9)");
      }
   
      else{
        $(".navbar").css("background" , "transparent");  
      }
    })
  })
