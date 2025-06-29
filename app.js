function updateClock() {
  const date = new Date();
  let hour = date.getHours();
  let ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12; // 0 => 12
  let minute = date.getMinutes();
  let second = date.getSeconds();

  document.getElementById('clock-hour').innerText = hour.toString().padStart(2, '0');
  document.getElementById('clock-minute').innerText = minute.toString().padStart(2, '0');
  document.getElementById('clock-second').innerText = second.toString().padStart(2, '0');
  document.getElementById('clock-ampm').innerText = ampm;
}

window.onload = () => {
  updateClock();
  setInterval(updateClock, 1000);
};
