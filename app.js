let alarmTime = null;

document.getElementById('set-alarm-btn').onclick = () => {
  const input = document.getElementById('alarm-time').value;
  if (input) {
    alarmTime = input;
    showToast(`✅ Alarm set for ${input}`);
  } else {
    showToast('⚠️ Please select a valid time.');
  }
};

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 3000);
}

function playAlarmSound() {
  const audio = document.getElementById('alarm-audio');
  audio.play();
}

function updateClock() {
  const date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  const is24Hour = document.getElementById('time-format').checked;

  let ampm = '';
  if (!is24Hour) {
    ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
  }

  document.getElementById('clock-hour').innerText = hour.toString().padStart(2, '0');
  document.getElementById('clock-minute').innerText = minute.toString().padStart(2, '0');
  document.getElementById('clock-second').innerText = second.toString().padStart(2, '0');
  document.getElementById('clock-ampm').innerText = is24Hour ? '' : ampm;

  if (alarmTime) {
    let [alarmHour, alarmMinute] = alarmTime.split(':').map(Number);
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();

    if (alarmHour === currentHour && alarmMinute === currentMinute && second === 0) {
      playAlarmSound();
      showToast('⏰ Wake up! Alarm ringing!');
      alarmTime = null; // Reset alarm
    }
  }
}

window.onload = () => {
  updateClock();
  setInterval(updateClock, 1000);
};
