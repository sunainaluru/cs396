**What Can a Browser Do?**
- In web dev, browser’s are also referred to as “the client.” 
- They’re the consumer of web resources.
    - Examples of web resources include: text files (HTML, CSS, and JavaScript files), images, data files, video & audio files, custom fonts
- They have a few jobs:
  - Creating (POST), reading (GET), updating (PUT), and deleting (DELETE) resources on servers on the user’s behalf. 
  - Interpreting instructions (HTML, CSS, and JavaScript files) and rendering (i.e. “drawing”) text, images, and graphics to the screen.
  - Responding to user events via default behaviors or via custom behaviors that are controlled by JavaScript
  - Writing local data (cookies, local storage, password storage, history to your hard drive)
  - Browsers do not have access to all your local file structure because that would be a security concern.
  - Browser has some storage (cookies) and that's a way for it to write to your computer, so server can know what info to refresh for your computer.
  - Browser can has a little  bit of memory in local storage.
  
**What is a Website?**
- A website as a program 
- Written using HTML, CSS, and JavaScript that your browser downloads from a server that corresponds to a web address (URL)
- Your browser then interprets the program it just downloaded “on-the-fly”

**Languages your browser understands**
- HTML
   - controls the content & structure
- CSS (Cascading Style Sheets)
  - controls the style, colors, layout, fonts, etc.
- JavaScript
  - controls movement and interactivity
  - can transmit data to and from servers without refreshing the page
  - can interact with local data stores
- Also understands select data formats including:
  - PNG, JPG, GIF, JSON, SVG, XML, and some select video, audio, and font formats

**Languages your web browser does NOT understand**
- Languages other than HTML, CSS, and JavaScript. 
  - Python, Ruby, Java, C#, etc.
  - TypeScript, CoffeeScript, JSX, and Dart (while designed to make JavaScript easier to program, they have to be ‘transpiled’ into JavaScript so that a browser can understand them)
- SCSS and SASS (dtto: they need to be compiled into CSS)
- For now, we’re not going to be using any client-side JavaScript dependencies or frameworks. We’ll be writing all of our JavaScript using Vanilla JavaScript

**Examples**
- Links ~ References: Links to scripts are analogous to importing references in other languages (...or using the “require” statement in Node.js)
- HTML ~ Content: Defines # of slides and their content
- CSS ~ Style: Styles the slides (yellow, centered, etc.)
- JavaScript ~ Interactivity: Sets up timer; responds to rendering dynamic elements on-the-fly) 

**How a browser interprets files**
- Here are the steps that a browser follows to render an HTML page to the screen:
1. Pulls down the HTML file
2. Reads it, scans it for links (“src” and “href” attributes), and then pulls down linked files
3. As it pulls down resources, it redraws the screen with the information. The addition of new image, CSS, and JavaScript files usually triggers a screen redraw

**Using the Browser Inspector**
- Like with all programming, you will encounter errors as you develop your websites. 
- The Browser Inspector is the very best resource that you have to help you resolve issues. It can help you...
  - Inspect and change elements and CSS properties
  - Examining the files that your browser retrieves
  - Examining requests and responses (communications)
  - Help you identify JavaScript errors

**HTML**
- HTML is a way of creating web documents using “markup tags”
- Each HTML tag has a set of rules that you have to follow to correctly use the tag.
- Sometimes, tags need to be nested in a particular way to be understood by your browser.

**HTML Rules of Thumb**
1. Avoid spaces, capital letters, and special characters when naming files
  - No whitespace (ename page 1.html → page_1.html or page1.html)
  - No capitalization; all lowercase (Rename Page1.html → page1.html)
  - No special characters (‘,!^%#). Dashes & underscores are OK (Rename Jenny's Page!.html → jennys_page.html)
2. Most tags have an opening tag and a closing tag
  - but some don't:
  - Images: `<img src="dog.png" />`
  - Line Breaks:	`<br />`
  - Horizontal Rules: `<hr />` 
  - Stylesheet Links: `<link rel="stylesheet" href="my_style.css" />`
3. The browser ignores whitespace
4. Make your code readable by indenting and using line breaks
```
<main>
	<p>
		Welcome, <strong>Leonard</strong>
	</p>
	<ol>
		<li>item 1</li>
		<li>item 2</li>
		<li>item 3</li>
	</ol>
</main>
```
5. Attribute syntax
- Attributes are always followed by an equals sign and values are surrounded by quotation marks.
- `<img src=“my_image.jpg”>`
6. Last in, first out (LIFO)
```
<p>Welcome, 
	<strong>Leonard</strong>
</p>
```
7. Use comments to help you understand your code
8. Know the difference between relative and absolute links
- Linking is perhaps the biggest idea of the web: documents link together creating a “web” of networked resources.
- Many different HTML tags use the concept of linking:
  - Stylesheet references
  - Multimedia embedding (e.g. images, videos, audio files)
  - Hyperlinks
- Links can be absolute: https://i.pinimg.com/originals/ac/f4/9b/acf49bd0f42b441160a9363dce88b243.jpg 
- Or they can be relative (in relation to the location of your html file): images/my_puppy.jpg 

**Document Object Model (DOM)**
- A way of representing a document, like a web page, in a way that can be understood by a human and by a computer. 
- Typically, a DOM is created using HTML. 
- Declarative languages like CSS are used to style it, and programming languages like Javascript allow us to change it.
- Allows you to programmatically manipulate elements and styles on a web page using CSS and JavaScript

**Selectors allow you to target elements in the DOM**
- CSS and JavaScript can both target elements within the DOM using different kinds of selectors. 
- The selector indicates what part of the DOM tree you want to access
- The selector method (JavaScript) traverses the DOM tree and return one or more nodes of the tree that correspond to the selector
- Once you have accessed a node (via a selector), you can manipulate it by:
  - Modifying its attributes or style properties
  - Modifying its children
  - Deleting or moving it

**Types of Selectors**
- `.class`
  - example: `.intro`
  - Selects all elements with class=”intro”
- `#id`
  - example: `#firstname`
  - Selects the element with id=”firstname”
- `*`
  - example: `*`
  - Selects all elements
- element
  - example: `p`
  - Selects all `<p>` elements
- element, element
  - example: div, p
  - Selects all `<div>` elements and all `<p>` elements
- element element
  - example: div p
  - Selects all `<p>` elements inside `<div>` elements
- element > element
  - example: `div > p`
  - Selects all `<p>` elements where the parent is a `<div>` element
- element + element
  - div + p
  - Selects all `<p>` elements that are placed immediately after `<div>` elements
- element~element
  - p ~ ul
  - Selects every `<ul>` element that is preceded by a `<p>` element 

**Selector Methods**
- getElementById() 
  - example: document.getElementById("my_element")
  - returns single elements
- querySelector() 
  - example: document.querySelector("#my_element")
  - example: document.querySelector("p")
  - example: document.querySelector(“.my-announcements")
  - returns single elements
- querySelectorAll()
  - example: document.querySelectorAll("p")
  - returns list of elements
- getElementsByTagName()
  - example: document.getElementsByTagName("div")
  - returns list of elements
- getElementsByClassName()
  - example: document.getElementsByClassName(".panel")
  - returns list of elements

**Attributes you can set**
- className
  - example: document.querySelector("div").className = “panel"; 
  - elements: all
- innerText 
  - example: document.querySelector("div").innerText = “hi";
  - elements: all
- innerHTML
  - example: document.querySelectorAll("p")
  - elements: all
- src (for images)
  - example: document.getElementsByTagName("div") 
  - elements: images only
- href (for links)
  - example: document.getElementsByClassName(".panel")
  - elements: links only
- ...
  - example: ...
  - elemnts ... 




