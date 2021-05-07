**Why Authentication?**
- Sometimes, you want to restrict access to data, depending on who is logged into the system
- To do this, you need to implement a way for your server to figure out who is making a request, and respond accordingly.
- There are many authentication strategies out there. 
  - Some use session variables – meaning that individual servers store info about individuals in memory. (Storing who's logged in to your system in memory, memory heald by individual server, so while server is turned on and running them memory persists. But when server is turned off then memory goes away.)
  - Others, like JWTs (which we’ll be discussing today), are token-based and server-independent (so long as all of the servers use the same secret they can all understand the same token strategy).

**JWTs (JSON Web Tokens)**
- JSON web tokens offer a way to securely transmit a JSON object between parties. 
- How this can work for authenticating to a web server:
1. User sends username and password to some authentication route (e.g. /login)
2. Server checks if the credentials supplied by the user are valid. If they are, server encode some information about the user in a “signed” token and sends this token back to the user.
3. The user then includes this signed token (as a request header) in all future requests.
4. Each time a new request is made, the server first checks if the token is valid, then it uses the “payload” (i.e. encoded JSON object), decodes token to see who is making the request and respond with the appropriate data.

**JWTs: How Encoding / Encryption Works**
- In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:
  - 1: Header – which encryption algo was used
  - 2: Payload – the data to encode (uses Base64Url), data you're sending around about the user
  - Note: neither the header nor the payload are encrypted. Don’t put any super secret stuff in the JSON!
  - 3: Signature – uses the algorithm specified in the header to encode: (the encoded header + encoded payload + and secret). 
  - Ensures that data has not been tampered with since it was issued by the server because only the server knows the secret.

**Useful for Microservices**
- One key advantage of using JWTs is that the same token can be used on both servers –  so long as both servers share the same access and refresh token secrets!
- It is often the case that the authentication server is on a completely different machine than the REST API that is serving your data

**The Refresh Token**
- Q: Why is it important that JWTs expire?
  - A: Because if they’re stolen, there’s no way to revoke access.
- Q: But what if the token expires but your user is still using your website?
  - A: Use a refresh token!
  - This is what causes **sesion timeouts**
- Basically a method of requesting a new access_token w/o having to log in again (so long as your refresh token is saved in a server cache/saved in the server's memory)
- [BACK END] At some point, the JWT expires. When this happens, the /tasks endpoint will return a 403 (Forbidden) status code to the front end.
  - you can issue a post request to issue a new access token
  - you can send a message to user to log in again
- [FRONT END] The front-end then needs to figure out what to do. It can either...
  - Redirect to the /login screen
  - Issue a POST request to the /token endpoint to get a new JWT access token and then query the /tasks endpoint again with the new JWT token.
  - The refresh tokens also eventually expire, but a slower process.

