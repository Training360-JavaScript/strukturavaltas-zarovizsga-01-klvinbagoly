function manipulateDom() {
    const quotes = document.querySelectorAll('.quote');
    quotes.forEach(quote => {
        quote.style.borderColor = 'blue';
        quote.style.backgroundColor = 'lightblue';
        quote.style.fontStyle = 'italic';

    })
};

export { manipulateDom };