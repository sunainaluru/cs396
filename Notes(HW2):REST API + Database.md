**Stateful Web Apps**
- Server itself stores data and information about previous requests that are used to interact with the client
- Limitations:
  - In real systems, there are often lots of different identical servers that a user can make requests to.
  - If data is stored on the server, the system must route each user to the same server each time they make a request to keep their information consistent, which becomes a logistical nightmare
  - If a stateful application goes down (say, if the computer crashes), all the data that was stored on the server instance is lost forever.

**Stateless Applications**
- No state is stored in the server
- Use databases, which is a persistent data store that exists outside of the server
- Web applications using REST typically use the Model-view-controller (MVC) design pattern, in which the user requests something from the controller (the server), which gets data from the model (the database), which is sent back to the controller and used to update the view (what you see on a web page)
