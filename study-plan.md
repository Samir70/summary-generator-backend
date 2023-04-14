# Getting advice from OpenAI

Since I was going to have to make an account at OpenAI to get this done, and it involved quite a bit of new tech, I thought I would ask for a study plan.

## summary of my interaction with openAI

Generally, it was useful.

I felt I got a better result than with google -- especially for my final request. Some of the resources it suggested where no longer available -- videos mainly. But, when I didn't find the suggested freeCodeCamp course, I searched the freeCodeCamp site and found one that was useful.

In future,  I will:
- Explicitly ask for resources that compare the new tech to things I know. While I told openAI that I knew express, it started me off with the nestjs docs rather than resources that compare using express to using nest. 
- Ask for projects that use the tech with a walk through of building up a project.

These were the most useful resources. The first two were found via suggestions by openAI (but not the actual suggestions). The third I found on google.
- https://platform.openai.com/docs/quickstart/build-your-application
- https://www.freecodecamp.org/news/learn-nestjs-by-building-a-crud-api/ 
- https://www.tomray.dev/nestjs-unit-testing

## Learning how to do this -- first request

I made an account at openAI and asked the following question:

> ```I need to write a backend in nest.js which calls the openAI API and forwards a response. I need to test the backend using jest and suprtest. I have programmed in javascript for a while and used express.js to make backends, but I don't know how use nest.js, jest or supertest. Acting as a tutor, can you please devise a study program which will enable me to do what I need to do as quickly as possible. Include reference to free articles which will help me learn. Thanks in advance.```

(It never hurts to be polite!)

I got this response:

Sure! Here's a study program that can help you quickly learn how to use Nest.js, Jest, and Supertest to build and test a backend that calls the OpenAI API:

Step 1: Learn Nest.js
Nest.js is a popular backend framework for Node.js that provides a modular and scalable architecture for building server-side applications. To get started with Nest.js, you can follow the official documentation and tutorials:

    Nest.js Official Documentation: https://docs.nestjs.com/
    Nest.js Crash Course - Traversy Media: https://www.youtube.com/watch?v=1Nl9Drs01Ew

Step 2: Understand Jest
Jest is a popular JavaScript testing framework that provides a simple and powerful way to write tests for your code. Jest integrates well with Nest.js and is the recommended testing framework for Nest.js applications. To learn Jest, you can refer to the following resources:

    Jest Official Documentation: https://jestjs.io/docs/en/getting-started
    Testing Nest.js Applications with Jest - Nest.js Official Documentation: https://docs.nestjs.com/fundamentals/testing

Step 3: Learn Supertest
Supertest is a popular library for testing HTTP APIs, and it can be used in combination with Jest to test Nest.js applications. Supertest allows you to make HTTP requests and assert on the response, which makes it a useful tool for testing API endpoints. Here are some resources to learn Supertest:

    Supertest Official Documentation: https://github.com/visionmedia/supertest
    Testing Nest.js Applications with Supertest - Nest.js Official Documentation: https://docs.nestjs.com/fundamentals/testing#end-to-end-testing

Step 4: Understand OpenAI API
Since you need to call the OpenAI API from your Nest.js backend, it's important to understand how the OpenAI API works and how to make API requests. You can refer to the OpenAI API documentation for detailed information:

    OpenAI API Documentation: https://beta.openai.com/docs/api-reference/introduction

Step 5: Combine Nest.js, Jest, Supertest, and OpenAI API
Once you have a good understanding of Nest.js, Jest, Supertest, and the OpenAI API, you can start building your backend that calls the OpenAI API and forwards the response. You can use Nest.js to create an API endpoint that makes the API request to OpenAI, and then use Supertest to write tests for that endpoint using Jest.

Here are some articles that can help you further with this integration:

    Building a RESTful API with Nest.js - Auth0 Blog: https://auth0.com/blog/building-a-restful-api-with-nestjs/
    Testing Nest.js Applications with Jest and Supertest - Auth0 Blog: https://auth0.com/blog/testing-nestjs-applications-with-jest-and-supertest/

By following this study program and referring to the official documentation and tutorials, you should be able to quickly learn how to use Nest.js, Jest, and Supertest to build and test your backend that calls the OpenAI API. Good luck!
ChatGPT Mar 23 Version. Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts

## Critique of response

> ```https://www.youtube.com/watch?v=1Nl9Drs01Ew isn't available anymore. Is there a written article that walks me through setting up paths in a nest.js project? Thanks.```

Response:

I apologize for the outdated link. As an AI language model, I do not have real-time access to the internet, and availability of online resources can change over time. However, I can still provide you with updated and relevant resources for learning Nest.js, Jest, Supertest, and the OpenAI API. Here are some alternative resources:

Nest.js Resources:

    Nest.js Official Documentation: https://docs.nestjs.com/
    Nest.js Crash Course - FreeCodeCamp: https://www.freecodecamp.org/news/nestjs-crash-course/

Jest Resources:

    Jest Official Documentation: https://jestjs.io/docs/en/getting-started
    Jest Crash Course - FreeCodeCamp: https://www.freecodecamp.org/news/jest-crash-course/

Supertest Resources:

    Supertest Official Documentation: https://github.com/visionmedia/supertest
    Testing HTTP Requests in Nest.js with Supertest - DigitalOcean Community: https://www.digitalocean.com/community/tutorials/testing-http-requests-in-nest-js-with-supertest

OpenAI API Resources:

    OpenAI API Documentation: https://beta.openai.com/docs/api-reference/introduction
    OpenAI API Quick Start Guide - OpenAI Documentation: https://beta.openai.com/docs/api-reference/quickstart/

As for articles specifically related to setting up paths in a Nest.js project, you can refer to the official Nest.js documentation on routing and controllers, which provides comprehensive information on how to define routes and handle HTTP requests in a Nest.js application:

    Nest.js Official Documentation - Routing: https://docs.nestjs.com/techniques/routing
    Nest.js Official Documentation - Controllers: https://docs.nestjs.com/controllers

I hope these resources help you in your learning journey to build a Nest.js backend that calls the OpenAI API and tests it with Jest and Supertest. If you have any further questions or need more guidance, feel free to ask!

## Feedback and further question

Thanks for your help. You are much better than google. I have now written a nestjs server that sends requests to openai and can forward the response.

It's a shame that you don't have real time access to the internet. The crash course from freecodecamp also isn't available, but I searched their website and found this: https://www.freecodecamp.org/news/learn-nestjs-by-building-a-crud-api/ it includes much more than I needed for my nestjs server, but I can skip those parts. Maybe you can use that link if someone else asks about nestjs.

I also used https://platform.openai.com/docs/quickstart/build-your-application to help me write the code.

Now I want to write a chrome extension which will be able to offer a user the chance to summarise the text they highlight on a webpage. I have written some simple chrome extensions before, following the examples on https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/

In the role of a professional coder, how would you code a chrome extension which offers the user a chance to send an http request when they highlight some text on a webpage?

## response:

As a professional coder, here's a high-level overview of how you could code a Chrome extension that sends an HTTP request when the user highlights text on a webpage:

- Define the manifest.json: Create a manifest.json file in your extension's directory. This file serves as the configuration for your Chrome extension and defines its permissions, background scripts, and other important details.
- Add event listeners: In your background script, add an event listener for the "mouseup" or "selectionchange" event, which will trigger whenever the user highlights text on a webpage.
- Extract the highlighted text: In the event handler for the "mouseup" or "selectionchange" event, use the appropriate APIs (such as document.getSelection() or window.getSelection()) to extract the highlighted text from the webpage.
- Create the HTTP request: Once you have the highlighted text, you can create an HTTP request using the Fetch API or any other library of your choice. You can set the appropriate headers, payload, and endpoint to send the request to.
- Handle the HTTP response: When the HTTP request returns a response, you can handle it in the callback or promise resolution. You can process the response and take appropriate actions, such as displaying a summary to the user or performing any other desired functionality.
- Update the UI: If you want to show a summary or any other information to the user, you can update the UI of your extension's popup or content script using the DOM manipulation APIs or any front-end framework of your choice.
- Test and debug: Make sure to thoroughly test your Chrome extension in different scenarios and environments, and use the Chrome DevTools for debugging and troubleshooting any issues that may arise.

Here are some resources that can help you in implementing the above steps:

    Chrome Extension API: https://developer.chrome.com/docs/extensions/mv3/mv3-overview/
    Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    Introduction to Content Scripts - Chrome Extension Documentation: https://developer.chrome.com/docs/extensions/mv3/messaging/

I hope this helps you in building your Chrome extension for text summarization. If you have any specific questions or need further assistance, feel free to ask!