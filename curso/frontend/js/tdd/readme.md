# TDD
Test driven development is a modern technique to review code in order to ensure the script works perfect.
We can do it manually but there are also some tools that makes it easier for you, jasmine is one of them.

## Jasmine
Jasmine its a framework that lets you test scripts in an easier and visual way, what you need:
http://evanhahn.com/how-do-i-jasmine/
https://jasmine.github.io/pages/docs_home.html
https://jasmine.github.io/2.9/introduction

### Documentation (JavaScript Testing Framework)

[Documentación: primeros pasos 2.9](https://jasmine.github.io/2.9/introduction)
[Documentación API 2.9](https://jasmine.github.io/api/2.9/global)

### Structure
It is very important to have a good folder structure, for example, one porposal is like the Hangman game:

- 3 folder:
    - scripts: Hangman.js, our script
    - tests: HangmanSpec.js: Here we have the script to test our Hangman.js, with (describe/it)
    - vendor: All jasmine folder (js, css, html)

- index.html, we just link the files
- SpecRunner.html

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
### Concepts
We have 3 main concepts to understand over jasmine TDD:
1. Test suite
2. Specs
3. Expectations

#### 1- Test suite
A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function. The string is a name or title for a spec suite - usually what is being tested. The function is a block of code that implements the suite.
Inside a suite, we have specs and expectations. describe()

#### 2- Specs
Specs are defined by calling the global Jasmine function it, which, like describe takes a string and a function. The string is the title of the spec and the function is the spec, or test. A spec contains one or more expectations that test the state of the code. An expectation in Jasmine is an assertion that is either true or false. A spec with all true expectations is a passing spec. A spec with one or more false expectations is a failing spec.

Since describe and it blocks are functions, they can contain any executable code necessary to implement the test. JavaScript scoping rules apply, so variables declared in a describe are available to any it block inside the suite.
Inside specs we have expectations. it()

#### 3- Expectations
Expectations are built with the function expect which takes a value, called the actual. It is chained with a Matcher function, which takes the expected value.

##### 3.1 Matchers
Each matcher implements a boolean comparison between the actual value and the expected value. It is responsible for reporting to Jasmine if the expectation is true or false. Jasmine will then pass or fail the spec.
expect().toBe(), Expect().toEqual(), expect().toMatch(/bar/)....

#### Example

```javascript

describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});

```
```javascript