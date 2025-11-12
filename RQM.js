const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity.", author: "Albert Einstein" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "A room without books is like a body without a soul.", author: "Cicero" },
  { text: "Do or do not. There is no try.", author: "Yoda" }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function QuoteMachine() {
  const [quote, setQuote] = React.useState(getRandomQuote());

  const newQuote = () => setQuote(getRandomQuote());

  return (
    <div id="quote-box">
      <p id="text">"{quote.text}"</p>
      <p id="author">- {quote.author}</p>

      <div className="button-group">
        <button id="new-quote" onClick={newQuote}>New Quote</button>

        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
          target="_blank"
        >
          Tweet
        </a>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<QuoteMachine />);
