const quotes = [
  {
    quote: "누7ㅏ 뭐zㅏ 해도 난 Lㅏ만의 길을 간ㄷㅏ..!",
    author: "초ㅣ고심",
  },
  {
    quote: "안되면 되는7ㅓ 해zㅏ! >_<",
    author: "초ㅣ고심",
  },
  {
    quote: "누7ㅏ 뭐라고 하면 0ㅣ렇7ㅔ 말ㅎㅐ! 뭐요? Lㅐ알빠! 0ㅓ쩔0ㅓ쩔요",
    author: "초ㅣ고심",
  },
  {
    quote:
      "뭔7ㅏ 잘 될것 같ㄷr.. 그냥 그런 느낌0ㅣ! 혹ㅅㅣ 근7ㅓ7ㅏ 있Lr요? 없는ㄷㅔ 알빤7ㅏ요?",
    author: "초ㅣ고심",
  },
  {
    quote: "온ㅅㅔ상0ㅣ Lr를 도오ㅏ! 못할7ㅔ 없ㄷr! 난 행운0ㅏ!",
    author: "초ㅣ고심",
  },
  {
    quote: "Lㅏ는...성공한ㄷㅏ! 당연함. 난 짱0ㅣLㅣ까.",
    author: "초ㅣ고심",
  },
  {
    quote:
      "⭐️중요공지!⭐️ 저를 구ㅣ0ㅕ우ㅓ ㅎㅏㅅㅔ요^^ 0ㅣ유 : 딱히 없Lㅔ요^^",
    author: "초ㅣ고심",
  },
  {
    quote: "웃는 ㅅㅏ람0ㅣ 승ㅈㅏ😁 오ㅐㄴㅑ? ㅈㅐ밌으Lㅣ77ㅏ~",
    author: "초ㅣ고심",
  },
  {
    quote: "난 끝77ㅏㅈㅣ 살0ㅏ남을7ㅓ0ㅑ..! ㅇㅇ ㅂㅓㅌㅕ줄7ㅔ",
    author: "초ㅣ고심",
  },
  {
    quote:
      "Lㅐ7ㅏ 성공ㅎㅏ는 0ㅣ유..! 1. 짱 0ㅣ0ㅓㅅㅓ 2. 구ㅣ엽ㄷr😉 3. 천ㅈㅐzㅏㅅㅓ^0^ 4. 그zㅣ고 착ㅎㅏㄷㅏ..!",
    author: "초ㅣ고심",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote}`;
author.innerText = `${todaysQuote.author}`;
