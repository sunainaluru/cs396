**Intro to AJAX**
- AJAX: Stands for Asynchronous JavaScript and XML
  - Enables JavaScript to make server requests and (optionally) update the current screen without having to refresh screen
  - Not easy to tell that information is even being transmitted to/from a server
  - Came on the scene ~2004 (made popular w/Google Mail and Google Maps)
  - Dynamic content fetch game changer

**Into to Fetch**
- The Fetch API is a newer instantiation of asynchronous server-client web communication
- By default fetch is a get request, it can do all of the REST APIs requests as well.
- Provides an interface for fetching resources (including across the network). The new API provides a more powerful and flexible feature set (improving upon AJAX)
- The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object)
- This is just an HTTP response, not the actual content. To extract the body content from the response, we use one of the content methods – in this case the json() method – which also returns a promise.

**Error Handling**
- If the response has an error code (e.g. HTTP 404, 400, or 500), the except won’t get triggered. 
- The catch part of the promise will only get triggered only if there's an error
- It will resolve normally, but the `ok` property of the response set to false if the response isn’t in the range 200–299)
- It will only reject on network failure or if anything prevented the request from completing.
```
fetch('/artists')
       .then(response => {
           if (!response.ok) { 
               // send to catch block:
               throw Error(response.statusText);
           } else {
               return response.json();
           }
       })
       .then(data => {
           console.log('Success:', data);
       })
       .catch(err => {
           console.error('Error:', err);
       });
```

**Cross-Origin Resource Sharing (CORS)**
- You have the option as the API builder whether or not you're going to allow other people from other parts to the internet to access your API.
- You can restrict those permissions using response headers. If you allow *Access-Control-Allow-Origin* to `*` then you are allowing everyone to access/use your APIs. You can also do specific domains instead of `*`.
- Some kinds of requests have an extra security check called a “preflighted request”. 
- In these requests, the browser and server communicate to determine whether the request is safe to send based on particular criteria set by each. (AJAX requests fall in this category)
- For certain AJAX requests, the server has to explicitly allow cross-origin resource sharing by setting the *Access-Control-Allow-Origin* response header.
- If you want to allow clients all over the Internet to access your REST API through a browser, you’ll need to set some security headers (see config/middleware.js)

