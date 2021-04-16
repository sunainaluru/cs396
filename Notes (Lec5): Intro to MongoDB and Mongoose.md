**Model-View-Controller Design Pattern (MVC)**
- The model-view-controller design pattern is a fairly standard pattern that allows a system to be decoupled into different components.
- Model: the data store (database). 
  - In our case, the “model” is MongoDB. 
- View: The user interface (UI); usually visual displays of data and content (though not always).
- Controller: Acts as an intermediary between the view and the model; processes requests and responses (e.g. a REST API).
  - Controller is the REST API

**Why is MVC Useful?**
- Separation of responsibilities
- Different people can work on different parts of the stack
- Many different views can interact with the same controller
  - Decouple your logic from your presentation layer, you can have a lot of different kinds of views.
  - Like REST API that allows you to interact with data and then you could have like an android APP or a web APP or any number of iot devices that are all interacting with this rest API
- Different components can be swapped out seamlessly:
 - Like migrating from different dbs
  - MongoDB → PostgreSQL
  - Or switching frameworks: Node.js → Django

**Backend Databases**
- Why would we want to use a database instead of that data.json file?
  - Json file limitations: when we're editing things in memory and not writing them back to a file they they get lost when we restart or servic
  - Large volumes of data can be stored in one place. 
  - Multiple users can read and modify the data at the same time (transaction management). 
  - Support for sorting, search, etc. so that data can be found quick and easily (and you don’t have to write all of the search functions).
  - Can enforce rules and constraints through schemas: can make sure that the data does not get into the database and stored unless it conforms to a certain criteria and has certain required data types and required fields.
 
 **MongoDB**
- MongoDB is a NoSQL database program that organizes collections of JSON-like documents with optional schemas. 
- There are many different kinds of databases out there (relational systems like SQL are a very popular choice for data with well-defined entity relations), but we've selected MongoDB because of its flexibility and usefulness for prototyping.
- Think of each entry in a MongoDB table to be a document (versus a record in a table).
- Flexibility example: you can create a DB in Mongo just from trying to access it.

**Mongoose**
- Mongoose is the library that helps us interact with mongo db
- it's the node client to interact with mongo db
