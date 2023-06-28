function onYouTubeIframeAPIReady() {
    var player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'ZUjHljKAMFQ',
      playerVars: {
        iv_load_policy: 3,
        // modestbranding: 1,
        // showinfo: 0,
        // controls: 0
      }
    });
  }