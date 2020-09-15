/*********************************
 Get the emoji from emojipedia.org
 ********************************/

 const btn = document.getElementById('emoji-btn');
 const emojis = ['😊', '😇', '🥰', '😍', '🤩', '😘', '😛', '😜', '🤪', '😅', '🤣', '😉', '😪', '🤤'];

 btn.addEventListener('mouseover', () => {
     btn.innerHTML = emojis[Math.floor(math.random() * emojis.length)];
 });