**The Challenge of Asynchronous Functions**
- Asynchronous functions can be a challenge if there are dependencies
- Sometimes, your code needs to access data that’s returned from an asynchronous function. 
- Programmers try to do something with the return from the asynchronous call, but the asynchronous call hasn't finished yet!..so things happen out of order.
- How do you get your code to wait for the async function to finish before it fires?

**Managing asynchronous function dependencies**
1. Strategy 1: Include callback function in the asynchronous function call
- Pass the second function as an argument to the asynchronous function
- Then, after the asynchronous code has executed, invoke the callback function
```
const getRestaurantAsync = (callback) => { // the "callback" is passing a function as an argument
    goAndGetDataOnInternet(data=> {
        // callback invoked after async logic completes
        callback(data);
   })
};
const doSomethingWithData = data => { // this is the call back function that does something with the data
    console.log(data)
};

getRestaurantAsync(doSomethingWithData); // invoke async function
```
**But what if you have to chain lots of functions together?**
2. Strategy 2: Promises!
- “A promise represents the eventual result of an asynchronous operation”
- You can interact with a promise through its `then()` method, which accepts 2 arguments: 
   - First argument is a function that executes if the promise if fulfilled
   - Second argument (optional) executes if the promise is rejected
   - You can also use the `catch()` method to pass in a rejection function
- The `then()` method also returns a promise so that multiple then statements can be chained together using more `then()`
```
deleteArtist()                
   .then(deleteArtistTracks)
   .then(data => {
       res.status(200).send(data);
   })
   .catch(err => {
       res.status(200).send(err);
   });
```
- Both `deleteArtist()` & `deleteArtistTracks()` return promises.
- Because of this, they can be chained together using `then()`.
- Typically, the result of the resolved promise becomes the argument that is passed into the next function.
  - where the argument passed into the `deleteArtistTracks` function will be the result of what was asynchronously retrieved in `deleteArtist` 
- Many function calls can be chained together if they return promise objects.
- The function specified in the catch() method will be called if any of the promises are rejected.

**Arrow Function Syntax**
1. The fat arrow is the delimiter between the arguments and the function body.
```
const add_two_nums = (num1, num2) => {
  return num1 + num2;
};
```
2. If you only return one result, you can condense the function by getting rid of the curly braces and putting everything on one line!
```
const add_two_nums = (num1, num2) => num1 + num2;
```
3. If you only have one argument, then you don't even need parentheses.
```
const square_number = num1 => num1 ** 2;
```

**Writing a Promise**
1. Promise takes two arguments:
  - `fulfilled` = if promise returns normally the next thing will be invoked
  - *IF YOU FORGET TO RESOLVE THE FULFILLED PART IT WILL HANG FOREVER*
  - `rejected` = if promise is rejected the catch will be invoked
  - *DO NOT FORGET TO RESOLVE YOUR FULFILLED AND REJECTED CALLS*
```
const getRestaurant = () => {
   return new Promise((fulfilled, rejected) => { // create a new promise
       goAndGetDataOnInternet(data=> { // invoking callback function referenced by 'data'
            fulfilled(data);
       })
   });
};

getRestaurant()
    .then(doSomethingWithData, handleError);
```

**The Value of Promises..Chaining**
```
getRestaurant()
    .then(getRestaurantReviews)       // remote async function call
    .then(insertReviewsToMyDatabase)  // remote async function call
    .then(sendEmailThatItWorked)      // remote async function call
    .then(sendMessageToClient)        // remote async function call
    .catch(handleError);              // handle rejection
```

**Can also use await / async instead of then... A lot cleaner**
- In the function that is going to invoke a bunch of asynchronous methods, you can place the keyword `async` right before the function definition,
```
const asyncAwaitTechnique = async () => {
    const restaurant = await getRestaurant();   
    const reviews = await getRestaurantReviews(restaurant.id); 
    doSomethingWithData(restaurant, reviews);
};
```
- `async` comes before function definition indicating that the function will be asynchronous. 
- `await` comes before the asynchronous function call.
   - Enables asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains


**Value of Asynchronous Code**
- Other code can run at the same time as these asynchronous chain functions
- Your code becomes very agile and can run many things at once, not just wait for calls to synchronously resolve.

**MongoDB: Promises & “Thenables”**
- Mongoose queries are not promises. 
- They have a `.then()` function that behaves like a promise, and supports the `async`/`await` keywords for convenience. 
  - However, unlike promises, calling a query's `.then()` can execute the query multiple times. 
- If you need a real Promise you should use the `exec()` method.
```
router.route("/artists")
   .get((_req, res) => {
       // implemented for you:
       console.log("GET /artists");
       Artist.find({})
           .then(artists => {
               res.status(200).send(artists);
           })
   })
```
- Using `async` and `await`
```
router.route("/artists")
   .get(async (_req, res) => {
       // implemented for you:
       console.log("GET /artists");
       const artists = await Artist.find({}).exec();
       res.status(200).send(artists);
   });
```
**Example: Syntax: JSON Querying with Mongoose**
```
router.route("/artists")
   .get(async (_req, res) => {
       // implemented for you:
       console.log("GET /artists");
       const artists = await Artist.find({}).exec();
       res.status(200).send(artists);
   });
```

**Example: Syntax: Mongoose Query Builder Syntax**
```
Person.
  .find({ occupation: /host/ })
  .where('name.last').equals('Ghost')
  .where('age').gt(17).lt(66)
  .where('likes').in(['vaporizing', 'talking'])
  .limit(10)
  .sort('-occupation')
  .select('name occupation')
  .exec(callback); // exec returns a promise
 ```

