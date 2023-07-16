import React from 'react';
import ReactDOM from 'react-dom/client';

// reactElement() is an object which gets converted into HTML that browser understands.

const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child"},
            [React.createElement("h1", {}, "This is Namaste React."), React.createElement("h2", {}, "I'm an h2 tag")]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [React.createElement("h1", {}, "I'm an h1 tag"), React.createElement("h2", {}, "I'm an h2 tag")]
        )
    ]
);

// To counter this bogus code using react, we use JSX
// The above code using createElement is the core react
// to show how react works behind the scene  with props, children etc.


const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent); //object

root.render(parent);