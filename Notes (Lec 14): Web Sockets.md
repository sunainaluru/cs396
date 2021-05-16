**What is a web socket?**
- A web socket is a persistent connection between a client and a server.
- Instead of the client always asking the server a question and then waiting and getting an answer, the web socket allows for bidirectional communication
- Essentially the web socket allows for a persistent connection between a client and the server until the connection is broken
- Multiple clients can connect to the same web socket. So there's an address essentially that is the Web Socket and then multiple clients can connect to that address. And if a server posts a message, all the clients connected to the WS can rceive that message.
- Unlike traditional HTTP requests, which must be initiated by the client, web sockets also allow a server to broadcast messages to its clients (i.e. push notifications).
- In other words, both the client and the server can trigger communication with one another, and both can send messages
- Before WS if you wanted to two way communications, there were only hacks and work arounds like create an interval timer that would ping the server and ask question over and over again "did something change"

**How does it work?**
- A WebSocket is initiated by the client via HTTP. The client asks the server to open a WebSocket connection.
  - If this initial handshake is successful, the protocol changes to a WS TCP/IP protocol from HTTP protocol
  - A HTTP 101 code sent (switching protocols)
  - The client and server have agreed to use the existing TCP/IP connection that was established for the HTTP request as a WebSocket connection.
  - Data can now flow over this connection
  - Once both parties acknowledge that the WebSocket connection should be closed, the TCP connection is torn down.

**Some Networking Terminology**
- HTTP: A protocol, a set of rules for how computers communicate on the web. It’s made up of the requests and responses, each of which contains a request line (“GET /doctors”), headers, and an optional message body.
- WebSocket is another protocol for sending and receiving messages (which follows a different set of rules for structuring messages).
- Both HTTP and WS are considered "application layer" networking because they transport the bytes over the Internet
- TCP (Transmission Control Protocol): A transport-layer standard that ensures streams of bytes, sent over in packets, are delivered reliably and predictably from one computer to another. 
  - HTTP and WebSockets both use TCP/IP at the packet/byte level, but the protocols for structuring the messages are different.
  - Transport layer = how things get to point a to point b

**What are some applications of WebSockets?**
- Application: Multiplayer Games
  - The server stores the game state
  - Players will take actions or make moves that are sent to the server, which updates the game state, and pushes it out to all players. 
  - Before: If you were using HTTP, each client would need to regularly poll the game state. 
  - After: With WebSockets, each move is instantly relayed to all players.
- Application: Chat Apps
  - Users send messages to a server, which instantly pushes these messages to the recipient (this week’s lab). 
  - Server can also store groups of connections in channels (maybe using a dictionary?), allowing you to message multiple people at once, or see messages from multiple people in a room, like a Slack channel.
- Application: Collaboration Apps
  - Similar to the Multiplayer game scenario: each user update is sent to the server and then broadcast to all of the connected users (triggering a screen redraw).
- Application: Location Aware Apps
  - Update the server when any user’s GPS coordinates change
  - Then send the user new data based on their current coordinates (and redraw the screen)
- Application: Server Monitoring / Sync Tools
  - Continuous Integration 
  - Tools like CircleCI use WebSockets to let you know the status of your build
  - Each time something notable on your server happens (e.g. a test passes, the code is successfully deployed, etc.), send a message to the interested parties (could be server-to-server interaction).
  - Real-Time Dashboard
  - Access metrics about different servers, including site performance, visitor count, and so forth. 
  - Open a WebSocket connection and send updates as soon as the server receives them.
