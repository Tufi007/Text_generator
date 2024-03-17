let btn = document.querySelector(".changebtn");
let text = document.querySelector(".text");
let author = document.querySelector(".author");
console.log(text.innerText);
const newtext = [
  {
    text: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein"
  },
  {
    text: '"It is difficult to be patient but to waste the rewards of patience is worse"',
    author: 'Hz Abu-Bakr as-Siddique (RA)'
  },
  {
    text: "Do not be fooled by the one who recites the Quran. His recitation is but speech, but look to those who act according to it.",
    author: "Hz Umar Ibn al-Khattab (RA)"
  },
  {
    text: "Patience is a pillar of faith.",
    author: "Hz Umar Ibn al-Khattab (RA)",
  },
  {
    text: "Your charity will not be accepted until you believe: “I need the reward more than the beggar needs the money."
    ,
    author: "Hz Umar Ibn al-Khattab (RA)",
  },
  {
    text: "Worrying about the world is a darkness in the heart, while worrying about the Hereafter is a light in the heart.",
    author: "Hz Umar Ibn al-Khattab (RA)",
  },
  {
    text: "People are paying no attention to the best act of worship: Humility",
    author: "Hz Aisha bint Abu-Bakr (RA)",
  },
  {
    text: "The wealth of a miser is as useless as a pebble.",
    author: "Hz Ali Ibn Abi Talib (RA)",
  },
];
btn.addEventListener('click',function(){
let random = Math.floor(Math.random()*newtext.length);
text.innerText= newtext[random].text;
author.innerText= newtext[random].author;});