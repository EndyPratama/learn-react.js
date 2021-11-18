# React Lesson I

In this material, we will create the following two targets. First, we will create a function that will change the display name when the button is clicked. Let's learn how it works.

Writing code to create the visual part of a website with React is very similar to HTML. However, in React, this is called JSX, not HTML.

Writing JSX is almost the same as writing HTML. You can use the exact same tags as HTML, such as ```<h1>``` and ```<h2>``` for headings or ```<p>``` for paragraphs, and ```<div>``` for columns and containers.

Although JSX is very similar to HTML, there are some differences. As shown in the image on the left, some elements cannot be placed in the return. If you have more than one element, combine them into one div tag like the example below.

Some elements can cause errors!

```js
render(){
  return(
    <h1>Heading h1</h1>
    <h2>Heading h2</h2>
  )
}
```

Group them into one tag!

```js
render(){
  return(
    <div>
      <h1>Heading h1</h1>
      <h2>Heading h2</h2>
    </div>
  )
}
```

When JSX is placed between the {/* and */} symbols, the text inside becomes a comment. Comments will not be displayed in the browser and will not change the output of your code. Some text editors will show comments in gray text.
  
In HTML, the img tag doesn't have a closing tag so it can be written like
```php
  <img src='image URL'>.
```
  However, the closing tag is required by the img tag in JSX as below. Remember in JSX, the img tag must end with /.
```php
  <img src='image URL' />.
```

### Application example
```js
  import React from 'react';

  class App extends React.Component {
    render() {
      returns (
        <div>
          <h1>Hello World</h1>
          <p>Let's learn React together!</p>
          {/* this is a comment */}
          <img src="https://user-images.githubusercontent.com/54503473/142431930-24f9b220-3546-4b48-af91-9860d0b0c774.png" />

        </div>
      );
    }
  }

  export default Apps;
```

## JSX Introduction

The App.js file always has the elements and structure shown below. Note: If you forget your inheritance or class, you can always go to https://www.w3schools.com/js/js_class_inheritance.asp to review it.

```js
import React from 'react'; //..................1
class App extends React.Component{ //............2
  render(){
    : //.................................................3
  }
}
export default Apps; //................................4
```

1. Import React
2. The class will inherit from React.Component
3. Define a render method that returns JSX
4. Export class


### Simple application example

```js
// Import React
import React from 'react';

// Declare App class
class App extends React.Component{
  render() {
    returns (
      <h1>Hello React</h1>
    );
  }
}

// Export class App
export default App
```

As you can see below, the areas of JSX and JS (JavaScript) are clearly divided. JSX is only written in the return of the render method. The JSX elements will be displayed in the browser.

```js
class App extends React.Component{
  render() {
    returns (
      {/*Put JSX here*/};
    );
  }
}
```

JavaScript can be written outside the return field (but still inside the render method). In the example below, the constant text is specified with the JavaScript code in the render method.
  
```js
class App extends React.Component{
  render() {
    const text = 'Hello React'; //...JavaScript code can be typed outside of return
    returns (
      :
    );
  }
}
```

Even in the return field, JavaScript can be written in JSX. To do this, the JavaScript code must be enclosed in curly braces { }. In addition, tag attribute values ​​can also be inserted into JSX with curly braces { } (as in the example on the right).
  
```js
render() {
  const imgUrl = 'https://---.png';
  returns (
    <img src = {imgUrl} /> //...Put the JavaScript code in curly braces { }
  );
}
```

We have seen that when JSX is placed between {/* and */} it becomes a comment (as in the example on the left). However, for JavaScript that is outside of return, creating a line as a comment must begin with two slashes //, as in the example on the right.
  
```js
render() {
  // this is a comment
  const imgUrl = 'https://---.png';
  returns (
    <img src = {imgUrl} /> 
  );
}
```

### Simple application

```js
  import React from 'react';

  class App extends React.Component {
    render() {
      // Declare constant name
      const name = 'React JS';

      // Declare constant imgUrl
      const imgUrl = 'https://user-images.githubusercontent.com/54503473/142431930-24f9b220-3546-4b48-af91-9860d0b0c774.png'

      returns (
        <div>
          {/* Use constant name to display "React JS" */}
          <h1>{name}</h1>

          {/* Use constant imgUrl to display images */}
          <img src = {imgUrl} />

        </div>
      );
    }
  }

  export default Apps;
```

## States & Events

Estimated Update 19/11/2021. Stay tuned...
