const faders = document.querySelectorAll(".fade-in");
const options = {
    threshold: 1,
    rootMargin: "0px 0px -25px 0px"
};
const AppearOnScroll = new IntersectionObserver(function(entries,AppearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            AppearOnScroll.unobserve(entry.target);
        }
    })
}, options);

faders.forEach(fader => {
    AppearOnScroll.observe(fader);
})















function textChange(){
    document.getElementById('section-title_button-IP').innerHTML = "62.235.177.67:1355";
  }
  
  function ClickFuncsFeedback(){
      textChange();
  }



  function ServerInvite() {
    window.open("https://discord.gg/Vjhvv5J")
  }