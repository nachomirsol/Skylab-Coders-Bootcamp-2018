#BEERS API
To use this api you just go to index.html and input the beer you want to search for.

## v1.0
This version is up to make the api work in a main.js, with 2 ajax calls. It works, but not so efficient.

## v2.0 
This version is a little improvement from the 1.0, here we separate the success ajax function, taking it outside the ajax call, inside the ajax
we just call the function.

## v3.0
Here we separate the layers in 2, one with the main script, and the other one with the ajax calls, the api.js.
We create an object at api.js called beersApi with 2 methods, each method has an ajax call so that in the main.js we just
call the object method when we need it.

## v4.0
Here we just try to make ES6 version for the api. variables are now with let and const, functions replaced with arrow functions and ajax call replaced
with fetch.