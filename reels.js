const reelVideos = [...document.querySelectorAll(".reel-video")];

reelVideos.forEach((video) => {
  video.muted = true;

  video.addEventListener("play", () => {
    reelVideos.forEach((otherVideo) => {
      if (otherVideo !== video) otherVideo.pause();
    });
  });

});
