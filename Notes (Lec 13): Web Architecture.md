**Servers & Clients**
- Browser = client
1. Brower makes its first request
2. Please give me the page at the address: www.google.com
3. Server says: here's google.com
4. Displays index.html

**How does a browser interpret files?**
- Here are the steps that a browser follows to render an HTML page to the screen:
1. Pulls down the HTML file
2. Reads it, scans it for links (“src” and “href” attributes), and then pulls down linked files
3. As it pulls down resources, it redraws the screen with the information. When new images, CSS files, and JavaScript files are downloaded from the corresponding server, this will triggers a screen redraw

**Summary of Client-Side Functionality**
- All functionality is “client-side” 
- *Server*: listens to requests and responds by “serving” static html, css, javascript, and image files
- *Browser* (client) is responsible for interpreting all of the instructions; and figuring out what to request next  
  - Think of the browser’s job as (a) downloading a program that you (the programmer) wrote, and then (b) responding to the user (which typically involves redrawing the screen and making additional resource requests.

**What are the limitations of only serving static files?**
- What if you want custom web pages for all of your users? Do you create a different HTML file for everyone?
- What if you want to dynamically create resources (e.g. add sunglasses on every image the user uploads)?
- You get the point!

**Server-Side Functionality**
- Sometimes, you need the server to generate files / resources on-the-fly. Examples:
- JSON: Return list of Doctor objects from my database (HW 1-3)
- JSON: Only show the TODO list that is associated with a logged in user (Lab 6)
- HTML: Generate an HTML file that has the logged in user’s profile image and name already embedded.
- This often involves querying a database (but not always).
- This is what is known as “server-side functionality” – where the logic happens “in the cloud” in order to *generate a resource (on-the-fly*) that can be returned to your user. *Dynamic generation of data, not static hmtl pages*

**Summary of Server-Side Functionality**
- Servers listen for and respond to requests over the internet. In order to service client requests, they can and do...
- Access other servers, for instance...
  - Querying a database owned by the organization
  - Requesting that an email or text message get sent (by, say, issuing a request to one of Twillio’s servers).
  - Parsing a Wikipedia page and merging that data with data its own servers store about Doctor Who
- Using all of the memory and/or software libraries installed on the server itself
- Generate resources on-the-fly to return to the client

**Your client can also access multiple servers at once...**
- And don’t forget that your HTML, CSS, and JavaScript files also access resources on many different servers...

**What is Heroku?**
- Heroku is a service that allows you to easily create server deployments (using the Ubuntu operating system).
- You tell Heroku how to get a copy of your files (usually via git)
- You tell Heroku what software you need it to install on the server
- Heroku does the rest:
  - Configures a web server to listen for traffic
  - Automatically installs and configures the software you need
  - The program that you wrote has now become an internet service.
  
**Which parts of the file system do what?**
- Client Side:
  - Any files that are responsible for making server requests and generating DOM elements.
  - No database connections, no “require” statements, etc.
- Server Side:
  - Direct database interaction
  - Node.js library dependencies (which are interpreted by the Node interpreter that you installed).
  - Console.log files go to your terminal (versus your browser)








