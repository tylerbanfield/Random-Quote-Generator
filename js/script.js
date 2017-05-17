// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {quote: "I believe life is an intelligent thing: that things aren't random.", source: "Steve Jobs", citation: "Time", year: "1997", tags: "Apple, Life, Philosophy", more: "https://www.brainyquote.com/quotes/authors/s/steve_jobs.html"},
  {quote: "Blogging is great, and I read blogs all day long. However, my goal is really to have a deep, meaningful discussion with people. For some reason, I'm able to accomplish this best via email.", source: "Jason Calacanis", tags: "Blogging, Email, TWIST", more: "http://www.azquotes.com/author/20120-Jason_Calacanis"},
  {quote: "I think it's fair to say that personal computers have become the most empowering tool we've ever created. They're tools of communication, they're tools of creativity, and they can be shaped by their user.", source: "Bill Gates", citation: "University of Illinois Urbana-Champaign", year: "2004", tags: "Microsoft, Technology", more: "https://www.goodreads.com/author/quotes/23470.Bill_Gates"},
  {quote: "You do things when the opportunities come along. I've had periods in my life when I've had a bundle of ideas come along, and I've had long dry spells. If I get an idea next week, I'll do something. If not, I won't do a damn thing.", source: "Warren Buffett", tags: "Creativity, Patience", more: "https://en.wikiquote.org/wiki/Warren_Buffett"},
  {quote: "It doesn’t matter how many times you have failed. You only have to be right once.", source: "Mark Cuban", citation: "New York Advertising Week", year: "2016", tags: "Failure, Perseverance, Success", more: "https://www.goalcast.com/2016/10/13/20-inspiring-mark-cuban-quotes-motivate-you-in-business-and-in-life/"}
];

//Grabs a random object from the quotes array
function getRandomQuote( quoteArray ) {
  var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  return randomQuote;
}

//Hat tip to b2point0h for this function
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Formats the quote & meta details and generates a random background color, then inserts onto the page
function printQuote(){
  quoteToPrint = getRandomQuote(quotes);
  quoteOutput = '<p class="quote">' + quoteToPrint.quote + '</p>';
  quoteOutput += '<p class="source">' + quoteToPrint.source;
    if (quoteToPrint.citation != undefined) {
      quoteOutput += '<span class="citation">' + quoteToPrint.citation + '</span>';
    }
    if (quoteToPrint.year != undefined) {
      quoteOutput += '<span class="citation">' + quoteToPrint.year + '</span>';
    }
  quoteOutput += '<p class="tags">Tags: ' + quoteToPrint.tags + '</p>';
  quoteOutput += '<p class="more">More quotes by <a href="' + quoteToPrint.more + '">' + quoteToPrint.source + '</a></p>';
  quoteOutput += '</p>'

  document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
  document.getElementById('quote-box').innerHTML = quoteOutput;
}

//Prints initial random quote & background color when page loads for the first time
printQuote();
//Automatically refreshes a new quote after 30 seconds
setInterval(printQuote, 30000);
