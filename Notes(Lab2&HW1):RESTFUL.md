**REST: REpresentational State Transfer**
- In order for your APIs to be RESTful, you have to follow a set of constraints when you write them

**6 REST Constraints for an API to be RESTful**
1. Uniform Interface (4 parts): The result of the uniform interface is that requests from different clients look the same, whether the client is a chrome browser, a linux server, a python script, an android app or anything else.  - The request to the server has to include a resource identifier
  - The response the server returns include enough information so the client can modify the resource
  - Each request to the API contains all the information the server needs to perform the request, and each response the server returns contain all the information the client needs in order to understand the response.
  - Hypermedia as the engine of application state. By hypermedia we refer to the hyperlinks, or simply links, that the server can include in the response. The whole sentence means that the server can inform the client , in a response, of the ways to change the state of the web application. If the client asked for a specific user, the server can provide not only the state of that user but also information about how to change the state of the user, for example how to update the user’s name or how to delete the user. It is easy to think about the way it’s done by thinking about a server returning a response in HTML format to a browser (which is the client). The HTML will include tags with links (this is the hypermedia part) to another web page where the user can be updated (for example a link to a ‘profile settings’ page). To put all of this in perspective, most web pages do implement hypermedia as the engine of application state, but the most common web APIs do not adhere to this constraint. 
2. Client Server separation
  - The client and the server act independently, each on its own, and the interaction between them is only in the form of requests, initiated by the client only, and responses, which the server send to the client only as a reaction to a request.
3. Stateless
  - Stateless means the server does not remember anything about the user who uses the API.
4. Layered System
  - These servers might provide a security layer, a caching layer, a load-balancing layer, or other functionality. Those layers should not affect the request or the response.
5. Cacheable
  - This means that the data the server sends contain information about whether or not the data is cacheable. If the data is cacheable, it might contain some sort of a version number. The version number is what makes caching possible: since the client knows which version of the data it already has (from a previous response), the client can avoid requesting the same data again and again.
6. Code-on-demand
  - Optional constraint: The client can request code from the server, and then the response from the server will contain some code, usually in the form of a script, when the response is in HTML format.   

**MongoDB**
MongoDB is a NoSQL database program that organizes collections of JSON-like documents with optional schemas. There are many different kinds of databases out there (relational systems like SQL are a very popular choice for more robust apps), but we’ve selected MongoDB because of its flexibility and usefulness for prototyping.


**Transmitting Data via REST requests**
- url path parameters
  - Path parameters are embedded within the URL string, which take the form of colon-prefixed variables in the route path. 
  - For example, in the path `"/doctors/:n"`, `n` is a parameter that can be accessed within the handler using `req.params["n"]`. 
  - Therefore, if I issued the request `/doctors/d4`, then `req.params["n"]` would evaluate to the string `d4`.
- the request body
  - A second way of transmitting data to a server is through the request body. 
  - On the Node.js side (server side), you can access this object using req.body, which takes the form of a JSON object. 
  - On the client side, there are several different approaches to encode data in a client request. 
  - NOTE: Passing data in the request body is typically done for POST, PUT, and PATCH requests. It cannot be done for GET requests.
- url query string parameters
  -  Query string parameters are appended to the end of a URL using the question mark `?` delimiter
  -  Primarily used for GET requests that require additional filtering. 
  -  For example, if you decided to support the ability to query for companions across several seasons and/or whether the companion lives or dies, you could express that query as follows:
  -  `"/companions/?seasons=3,4,5&alive=true"`
  -  Query string parameters can be accessed within the handler using `req.query["param_name"]`

**Status Codes**
- All HTTP responses have an attached status code, which represents additional information about the request.
- Commonly used: 200, 400, 500 codes.
