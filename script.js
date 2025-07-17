const emojis = ["😀", "😂", "😍", "🤔", "🥶", "😎", "👻", "🎃", "🚀", "🌈", "🔥", "❤️", "👍", "💡", "🎮"];

const gallery = document.getElementById("gallery");

emojis.forEach(emoji => {
  const div = document.createElement("div");
  div.className = "emoji";
  div.textContent = emoji;
  gallery.appendChild(div);
});
