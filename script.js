const videoEl = document.querySelector(".video");
const buttonEl = document.querySelector(".button");

async function captureMediaStream() {
  videoEl.hidden = false;
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    };
  } catch (error) {}
}

buttonEl.addEventListener("click", captureMediaStream);
