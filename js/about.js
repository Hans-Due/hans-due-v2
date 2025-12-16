document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".about_mainvideo").forEach(function (container) {
    var video = container.querySelector("video.autoplay-muted");
    var btn = container.querySelector(".video-unmute");
    if (!video || !btn) return;
    btn.addEventListener("click", function () {
      video.muted = !video.muted;
      btn.textContent = video.muted ? "Unmute" : "Mute";
      btn.setAttribute("aria-pressed", String(!video.muted));
      btn.setAttribute(
        "aria-label",
        video.muted ? "Unmute video" : "Mute video"
      );
      if (!video.muted && video.paused) video.play();
    });
  });
});
