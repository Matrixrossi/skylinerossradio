// scripts.js

// Play/pause radio player
const playPauseControl = document.getElementById('playPauseControl');
const radioPlayer = document.getElementById('radioPlayer');
const playIcon = playPauseControl.querySelector('i');

playPauseControl.addEventListener('click', () => {
  if (radioPlayer.paused) {
    radioPlayer.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  } else {
    radioPlayer.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  }
});

// Modal controls for forms
function setupModal(buttonId, modalId, closeId) {
  const button = document.getElementById(buttonId);
  const modal = document.getElementById(modalId);
  const close = document.getElementById(closeId);

  button.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });
}

setupModal('songRequestButton', 'formModal', 'closeButton');
setupModal('messageButton', 'formModal1', 'closeButton1');
setupModal('applicationFormButton', 'formModal2', 'closeButton2');

// Form submit handlers (prevent default and maybe add your own later)
document.getElementById('requestForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Song request submitted!');
  document.getElementById('requestForm').reset();
  document.getElementById('formModal').style.display = 'none';
});

document.getElementById('requestForm1').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent!');
  document.getElementById('requestForm1').reset();
  document.getElementById('formModal1').style.display = 'none';
});

document.getElementById('requestForm2').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Application submitted!');
  document.getElementById('requestForm2').reset();
  document.getElementById('formModal2').style.display = 'none';
});

// Volume control
const volumeSlider = document.getElementById('volumeSlider');
volumeSlider.addEventListener('input', () => {
  radioPlayer.volume = volumeSlider.value / 100;
});
