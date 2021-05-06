**Data to HTML string transformations**
- Use templates: strings that allow you to embedded expressions
- They’re convenient for generating larger chunks of HTML from lists of objects
- Uses the “backtick” character (instead of regular single or double quotes) to indicate that you are specifying a template (above the tab key)
- Within the template, expressions represented can be inserted with $
- A template can be multiple lines. And it can also evaluate expressions. `${2 + 2}` or `${getTodaysDate()}`

**Events**
- When JavaScript is used in HTML pages, JavaScript can "react" to particular “events,” which include (among others): 
  - onchange
  - onclick
  - onmouseover
  - onmouseout
  - onkeydown
  - onload
- Events are comprised of two parts:
  - *Event Listeners*: refer to the particular interaction / thing to which you want to listen (e.g. listening for the onclick, onchange, onmouseover, etc. events to fire)
  - *Event Handlers*: the function that you want to execute when the event listener triggers the event.

**Contextual Event Handlers**
- Event listeners pass one argument – an event object – to the event handler.
- The event object has some properties associated with it that can be useful
- One property of the event object we’re going to use is the *currentTarget*, which allows you to access the element corresponding to the event that was triggered. 
- One common technique in front-end programming is to embed data attributes – which is a way of storing information that can be used later by various event handlers. 
  - Data attributes have a data- prefix




