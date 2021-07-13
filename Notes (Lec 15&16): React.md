**Pros: Using a Client-Side Web Frameworks**
- I.e. React, Vue, Angular
- Why would you want to use a client-side framework?
  - Encourages you to abstract logical groupings of HTML, CSS and JavaScript logic into blocks (sometimes called ‘widgets’ or ‘components’) 
  - Standardizes the interfaces and techniques for handling workflow and user interactions (which makes it easier for teams to work together)
  - Communities can organize around a library and make open-source components and plugins that can facilitate rapid prototyping.
  - Helps to manage complexity as your app gets bigger.

**Cons: Using a Client-Side Web Frameworks**
- Why would you not want to use a client-side framework?
  - Steep learning curve
  - Might be overkill for what you need
  - Sometimes all you need is a light-weight JS function to do the job!
  - Are you making a bunch of server requests from a single-page application?
  - Do you have a lot of client-side components that you need to manage?

**JSX**
- A syntax extension to JavaScript (like a template literal)
- Philosophy:  Putting HTML & JS into the same file – via “components” – is easier to reason about. Keeping them separate is confusing. 
- JSX not required, but suggested when using React
- Some syntax things...
  - CamelCase convention for properties and variable names (just like JavaScript)
  - No quotes around the JSX itself
  - Quotes around constants
  - Curly braces instead of quotes around JavaScript expressions
  - Use className (instead of class) to assign CSS classes
```
<div className="doctor">
    <h2>{doctor.name}</h2>
    <img className="thumbMedium" src={doctor.image_url} />
    <p>Seasons: {doctor.seasons.join(', ')}</p>
</div>
```

**React Components**
- Allow you split the UI into independent, reusable pieces, and think about each piece in isolation (all JS frameworks do this, btw). 
- A special kind of JavaScript class that:
- Accepts arbitrary inputs (called “props”)
- Returns a React element
- All components need to start with a capital letter
- Props – which are passed into the component – are read-only (immutable)

**Components**
- Components accept a single “props” (which stands for properties) object argument and return a react element. Two syntaxes are functionally the same:
```
function Welcome(props) {
   return <h1>Hello, {props.name}</h1>;
}
class Welcome extends React.Component {
   render() {
       return <h1>Hello, {this.props.name}</h1>;
   }
}
```

**Using Components**
- Once you create a component function / class, you can use it like regular HTML syntax (so long as you import the component).
- Note the uppercase convention (lowercase tags treated like regular HTML tags)
```
// In another file
import Welcome from './Welcome';
...
<Welcome name="Sarah" />
```

**Aside: JavaScript Classes and the “this” keyword**
- There are many different syntaxes for defining a JavaScript class. The React docs uses class syntax (so we will talk about that one today). Basic rules:
- Constructor accepts initialization arguments
- “this” keyword to refer to instance methods and properties
- “bind” function overrides the the default “this” argument with the one you give it (see lecture16/02-bind-example)

**State and Lifecycle**
- You use the component’s “state” object for any data that can be potentially changed by an interaction. 
- The State object helps you keep track of changes and update the UI accordingly. Examples of where you might want to use state:
  - User asked to see a specific doctor
  - User updates the doctor’s name
  - User cancels
- When any of these interactions happens, you will update the component’s state. Any update to state will redraw the screen (i.e. the render() function will be invoked)

**Lifting State Up**
- The state of a component is only accessible to the component (it’s encapsulated)
- If you want a state change to “notify” another component (i.e. “lifting up the state”), then your child component needs use an event handler from the immediate parent component (passed in as a property)

**Approach**
- Draw boxes around the components
- Create a static version of everything
- Identify the minimal representation of the UI state
- State typically involves things that will change based on a user interaction
- Decide where your state should live
- Identify every component that should render something based on a particular state value
- Find the common owner
- Add inverse data flow


