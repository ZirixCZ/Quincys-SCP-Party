function HomeOpen() {
    window.open("https://www.quincyscp.ga/")
  }

  window.addEventListener('scroll', event => document.querySelector('.navbar').classList [600 < document.scrollingElement.scrollTop ? 'add' : 'remove']
  ('dark')
  );
  window.addEventListener('scroll', event => document.querySelector('.parallax').classList [200 < document.scrollingElement.scrollTop ? 'add' : 'remove']
  ('shader')
  );

  new Twitch.Player("twitch-embed", {
    channel: "wantedduck125",
    autoplay: false
  });
  new Twitch.Player("twitch-embed1", {
    channel: "cocowitts",
    autoplay: false
  });
