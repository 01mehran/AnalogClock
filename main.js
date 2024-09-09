function clock() {
  let h = document.getElementById("hours");
  let m = document.getElementById("minutes");
  let s = document.getElementById("seconds");

  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  h.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
  m.style.transform = `rotate(${6 * minutes}deg)`;
  s.style.transform = `rotate(${6 * seconds}deg)`;

  let sound = new Audio("./audio/sound.wav");
  sound.play();
}
setInterval(clock, 1000);
