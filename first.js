const motivationalQuotes = [
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "Your limitation—it's only your imagination. — Unknown",
    "Push yourself, because no one else is going to do it for you. — Unknown",
    "Great things never come from comfort zones. — Unknown",
    "Dream it. Wish it. Do it. — Unknown",
    "Success doesn’t just find you. You have to go out and get it. — Unknown",
    "The harder you work for something, the greater you’ll feel when you achieve it. — Unknown",
    "Dream bigger. Do bigger. — Unknown",
    "Don’t stop when you’re tired. Stop when you’re done. — Unknown",
    "Wake up with determination. Go to bed with satisfaction. — Unknown",
    "Do something today that your future self will thank you for. — Unknown",
    "Little things make big days. — Unknown",
    "It’s going to be hard, but hard does not mean impossible. — Unknown",
    "Don’t wait for opportunity. Create it. — George Bernard Shaw",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths. — Unknown",
    "The key to success is to focus on goals, not obstacles. — Unknown",
    "Dream it. Believe it. Build it. — Unknown",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "What we think, we become. — Buddha"
];
function generateQuote() {
    let text = document.getElementById('quote');
    let index = Math.floor(Math.random()*motivationalQuotes.length);
    text.textContent = `${motivationalQuotes[index]}`;

    let col = document.getElementById('dynamicColor');
    // col.style.backgroundColor = "green";
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    col.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

}
setInterval(generateQuote, 3000)