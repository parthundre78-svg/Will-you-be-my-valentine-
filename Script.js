const yesBtn = document.getElementById('yesBtn');
const noBtn  = document.getElementById('noBtn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
  response.classList.remove('hidden');
  response.classList.add('show');
});

noBtn.addEventListener('click', () => {
  noBtn.style.transform = `translate(${Math.random()*240-120}px, ${Math.random()*240-120}px)`;
  const texts = [
    "Pretty please? 🥺",
    "Are you sure? 😭",
    "My heart is breaking…",
    "One more chance? ❤️",
    "I’ll cry…",
    "Don't do this to me 😢",
    "You know you want to~ 😏"
  ];
  noBtn.innerHTML = texts[Math.floor(Math.random() * texts.length)];
});
