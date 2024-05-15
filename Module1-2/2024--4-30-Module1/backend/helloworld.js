function PrintLinesOnConsole()
{
    console.log('Hello World')
    console.log("Second line")
}
function PrintSentiment(text)
{
    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    return result.score;
}


console.log(PrintSentiment("Dogs are great"))

