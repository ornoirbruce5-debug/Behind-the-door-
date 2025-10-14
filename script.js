
```js
// Load products from JSON file
async function loadStock() {
  try {
    const res = await fetch('products.json');
    const data = await res.json();
    const tbody = document.querySelector('#stockTable tbody');
    data.products.forEach(prod => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><img src="prod.image" alt="{prod.name}" width="80"></td>
        <td>prod.name</td>
        <td>{prod.price} FBU</td>
        <td>prod.inStock ? 'Hahari' : 'Ntaboneka'</td>
      `;
      tbody.appendChild(tr);
    );
   catch (e) 
    console.error('Error loading stock:', e);
  

// Testimonials sample
const testimonials = [
   name: 'Alice', text: 'Serivisi nziza cyane!', rating: 5 ,
   name: 'Jean', text: 'Nashimishijwe cyane.', rating: 4 
];
function loadTestimonials() 
  const cont = document.getElementById('testList');
  testimonials.forEach(t => 
    const div = document.createElement('div');
    div.className = 'testimonial';
    div.innerHTML = `<p>"{t.text}"</p><p>-t.name{'⭐'.repeat(t.rating)}</p>`;
    cont.appendChild(div);
  });
[13/10, 07:23] ChatGPT: }

// Joke spinner logic
const jokes = [
  "Ukuri ni kubona ibyo udashaka.",
  "Umunsi mwiza utangirana umuseke.",
  "Ndashaka ko umunsi wawe wose uba mwiza."
];
function loadDailyJoke() {
  const used = JSON.parse(localStorage.getItem('usedJokes') || '[]');
  const available = jokes.filter((j,i) => !used.includes(i));
  if (available.length === 0) {
    localStorage.removeItem('usedJokes');
    loadDailyJoke();
    return;
  }
  const idx = jokes.indexOf(available[0]);
  used.push(idx);
  localStorage.setItem('usedJokes', JSON.stringify(used));
  document.getElementById('jokeText').innerText = jokes[idx];
}
document.getElementById('newJokeBtn').addEventListener('click', loadDailyJoke);

// Chatbot stub with Puter.js
function showBotMessage(msg) {
  const win = document.getElementById('chatWindow');
  const p = document.createElement('p');
  p.innerText = msg;
  win.appendChild(p);
  win.scrollTop = win.scrollHeight;
}
document.getElementById('sendBtn').addEventListener('click', () => {
  const input = document.getElementById('chatInput').value;
  if (!input) return;
  showBotMessage(`U: ${input}`);
  // stub: here you'd call Puter.js or API
  setTimeout(() => {
    showBotMessage(`Bot: Ndumva neza, turashaka kugufasha 😉`);
  }, 1000);
});

// Dark mode toggle
[13/10, 07:23] ChatGPT: const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light-mode');
});

// On load
window.addEventListener('DOMContentLoaded', () => {
  loadStock();
  loadTestimonials();
  loadDailyJoke();
});
```
