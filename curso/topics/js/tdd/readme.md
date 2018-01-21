#TDD
Test driven development is a modern technique to review code in order to ensure the script works perfect.
We can do it manually but there are also some tools that makes it easier for you, jasmine is one of them.

##Jasmine
Jasmine lets you test script in an easier and visual way, what you need:
http://evanhahn.com/how-do-i-jasmine/
https://jasmine.github.io/pages/docs_home.html
https://jasmine.github.io/2.9/introduction

###Documentation (JavaScript Testing Framework)

[Documentación: primeros pasos 2.9](https://jasmine.github.io/2.9/introduction)
[Documentación API 2.9](https://jasmine.github.io/api/2.9/global)

###Structure
It is very important to have a good folder structure, for example, one porposal is like the Hangman game:

- 3 folder:
    scripts: Hangman.js, our script
    tests: HangmanSpec.js: Here we have the script to test our Hangman.js, with (describe/it)
    vendor: All jasmine folder (js, css, html)

- index.html and SpecRunner.html

In index.html we just link the files for our Hangman.js file

 ```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<script src="scripts/Hangman.js"></script>
		<title>array shuffle</title>
</head>
<body>
	<h1>Hangman game</h1>
	<p>Mira la consola del navegador</p>
	<p>Utilizamos Jasmine para testear el código</p>
</body>
</html>
```
In SpecRunner.html we will have to include all jasmine css,html,js files, our script Hangman.js and our spec test.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Jasmine Spec Runner v2.9.0</title>

	<link rel="shortcut icon" type="image/png" href="vendor/jasmine/2.9.0/jasmine_favicon.png">
	<link rel="stylesheet" href="vendor/jasmine/2.9.0/jasmine.css">

	<script src="vendor/jasmine/2.9.0/jasmine.js"></script>
	<script src="vendor/jasmine/2.9.0/jasmine-html.js"></script>
	<script src="vendor/jasmine/2.9.0/boot.js"></script>

	<!-- include source files here... -->
	<script src="scripts/Hangman.js"></script>

	<!-- include spec files here... -->
	<script src="test/HangmanSpec.js"></script>

</head>

<body>
</body>
</html>
```