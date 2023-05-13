  
    const quotes = [
      {
        text: "Be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
      },
      {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
      },
      {
        text: "If you want to go fast, go alone. If you want to go far, go together.",
        author: "African Proverb"
      },
      {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
      }
    ];

    const quoteText = document.querySelector('#text');
    const quoteAuthor = document.querySelector('#author');
    const newQuoteButton = document.querySelector('#new-quote');

    function getRandomQuote() {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    }

    function renderQuote() {
      const { text, author } = getRandomQuote();
      quoteText.textContent = text;
      quoteAuthor.textContent = `— ${author}`;
    }

    newQuoteButton.addEventListener('click', renderQuote);

    renderQuote();
  