const maneSelect = document.getElementById('mane-select');
const eyesSelect = document.getElementById('eyes-select');
const noseSelect = document.getElementById('nose-select');
const mouthSelect = document.getElementById('mouth-select');
const maneImg = document.getElementById('mane');
const eyesImg = document.getElementById('eyes');
const noseImg = document.getElementById('nose');
const mouthImg = document.getElementById('mouth');

maneSelect.addEventListener('change', () => {
  maneImg.src = `mane/${maneSelect.value}`;
});

eyesSelect.addEventListener('change', () => {
  eyesImg.src = `eyes/${eyesSelect.value}`;
});

noseSelect.addEventListener('change', () => {
  noseImg.src = `nose/${noseSelect.value}`;
});

mouthSelect.addEventListener('change', () => {
  mouthImg.src = `mouth/${mouthSelect.value}`;
});
