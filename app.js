function removeTransition(e) {
  if (e.propertyName !== "box-shadow" && "transform") return;
  e.target.classList.remove("playing");
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

keys.forEach((key) => key.addEventListener("click", playSoundClick));
function playSoundClick(e) {
  const target = e.target;
  const keyDiv = (() => {
    if (target.className == "") {
      return target.parentElement;
    } else {
      return target;
    }
  })();

  const audio = document.querySelector(
    `audio[data-key="${keyDiv.dataset.key}"]`
  );
  const key = document.querySelector(`div[data-key="${keyDiv.dataset.key}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}
