#SPOTIFY API
To use this API you need to go to https://developer.spotify.com/web-api/console/get-search-item/ , press the putton get oauth token,
and at the pop up window press request token. After that you should copy from the black Curl command the text from Bearer to the end, and
paste it at the variable token from the main.js in the version 2.0 or 3.0

## v1.0
This version is up to make the api work in a main.js, with for ajax calls. It works, but not so efficient. We have to place the token 4 times
one for each call.

## v2.0 
This version is a little improvement from the 1.0, here we separate the success ajax function, taking it outside the ajax call, inside the ajax
we just call the function. Here you just have to paste the token once at the beggining.

## v3.0
Here we separate the layers in 2, one with the main script, and the other one with the ajax calls, the api.js.
We create an object at api.js called spotify with 4 methods, each method has an ajax call so that in the main.js we just
call the object method when we need it.

## v4.0
Here we just try to make ES6 version for the api. variables are now with let and const, functions replaced with arrow functions and ajax call replaced
with fetch.