# Using OpenAI to summarise text

## Table of contents

- [Description](#description)
- [Note to reviewers](#note-to-reviewers)
- [Installation and usage of the server](#installation-and-usage-of-the-server)
- [Using the Chrome Extension](#using-the-chrome-extension)

## Description

There are two parts to this: 
- A nestjs server that contacts OpenAI and requests a summary of some text. (The text needs to have more than 20 words, or it responds with sarcasm!)
- A chrome extension that makes use of the server to send highlighted text (or entire BBC articles) and show a summary. The summary is shown in an alert box (which wasn't the brief I was given, but I have already spent quite a bit of time on this and need to hand it in).

This was my first project with [Nest](https://github.com/nestjs/nest). A very different feel to vanilla Node or Espress, but something I could get used to. 

See the [study plan](./study-plan.md) I got from OpenAI. And I initially developed the chrome extension in [this repo](https://github.com/Samir70/Learning_Chrome_Extensions).

## Note to reviewers

I enjoyed this as a programming challenge, but decided from the outset to be a bit selfish with the time I put in. I focused on learning new tech: nestjs, how to use it with jest and supertest. I also learned how to make my first chrome extensions -- and I'm happy enough with the end result that I might go on using it to summarise BBC articles. 

I haven't made the React popup page, with MongoDB to store previous summaries. These are things I have used in the past (and my React skills do need refreshing and updating). You can find projects using that tech on my github.

For the things I have done: I don't feel that it is perfect. I know that I need to test the server better: I couldn't get the mocking to work, so there is no test of the interaction with OpenAI. I look forward to further feedback.

## Installation and usage of the server

After cloning this repo, install the dependencies:

```bash
$ npm install
```

Before running the server, you need to go to OpenAI and get an `OPENAI_API_KEY`, and save this in a `.env` file as `OPENAI_API_KEY="your key goes here"`.

To run the server:

```bash
# development
$ npm run start
```

You can now go to a browser (or Postman) and get a summary of short text by sending text as a query parameter:

```
http://localhost:3000/viaopenai/getsummary?text=frog%20pond%20splash
```
response:

```js
{
    text:	"frog pond splash"
    summary:"The text you submitted can be summarised as follows: It is a translation of a haiku expressing the inevitability of actions when free will is nothing but an illusion."
}	
```
To actually use OpenAI for the summary, you need to send text longer than 20 words.

## Using the chrome extension

Note that the server needs to be running locally for this extension to work.

Go to `chrome://extensions/` in a chrome browser. Make sure you are in developer mode, and click on `load unpacked`. Select the `ChromeExtension` folder in this repo. Navigate to a BBC news article, like [this one](https://www.bbc.co.uk/news/world-australia-65259342). Click the extension button for `Text Digester`. An alert popup will appear after a short while with a summary of the article.

You can also select text, and a summary will appear on `mouseup` event. This feature is available on every webpage, only BBC news articles will get a proper summary of the entire article.
