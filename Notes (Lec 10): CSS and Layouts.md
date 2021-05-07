**CSS Files: Style & Layout**
- Controls the page style & layout
- Stylesheets can either be internal (within style tags) or external (in a separate *.css file)
- You can include as many stylesheets as you want!

**Anatomy of a Stylesheet**
- Stylesheets are compromised of rulesets
- Each ruleset:
  - selector
  - property
  - value
  - declaration

**The Box Model**
- margin
- padding
- border
- width
- box-sizing (border-box v. content box)
- display (block, inline-block, inline, grid, none, etc.)

**Box Level Elements**
- <address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt> <fieldset> <figcaption> <figure> <footer> <form> <h1>-<h6> <header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> <section> <table> <tfoot> <ul> <video>
 
 **Inline Elements**
 - <a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <kbd> <label> <map> <object> <output> <q> <samp> <script> <select> <small> <span> <strong> <sub> <sup> <textarea> <time> <tt> <var>

**Specificity and the cascade**
- The “cascade” refers to the way that CSS styles are applied to HTML elements. Styles applied to elements cascade down to their descendants, unless they are overridden.
- Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.
- You can think of the cascade as a layering of styling rules, in order of specificity.

**Units**
- `em` units for CSS = units relative to font size of the lement
- `rem` units relative to the root element font
- `fr` fractional units, how many units of the available space should we fill

**Layouts**
- Layouts are the hardest thing about CSS for many reasons:
- The language has many, many different layout ‘paradigms’ for doing the same thing.
- Specifying the rules for arranging boxes the right way is difficult
- You have to design for several different browser configurations (what looks good on a desktop doesn’t necessarily look good on mobile).
- Everything has to be flexible and resizable so that it scales gracefully.

**CSS Grid and Flexbox**
- Flexbox: 
  - Typically used when you have many child containers that you want to flow within a parent container. 
  - Lets you specify a few generic rules that will control how the children of a container are positioned
- Grid:
  - CSS Grid allows you to assign containers to specific places on your web page. It is often used to configure the main layout of a page
 







