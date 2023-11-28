import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// nested Html structure using react

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I'm H1 inside div inside div."),
//     React.createElement("h2", {}, "I'm H2 inside div inside div."),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm H1 inside div inside div."),
//     React.createElement("h2", {}, "I'm H2 inside div inside div."),
//   ]),
// ]);

// root.render(parent);

// React.createElement => Object => htmlElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "This is Namaste from React.createElement"
// );

// const JSXHeading = (
//   <h1 id="heading" className="heading">
//     Namaste from JSX Heading.
//   </h1>
// );

// React Component

// Functional React Component

const Title = () => <h1 className="addition">Title Dummy</h1>;

const elem = (
  <span>React element inside another element of react . </span>
)

const value = 1000;

// Adding React Element inside JSX
const addition = (
  <h1 tabIndex="5">
    {elem}
    Addition for JS Reandering inside JSX by React Component.
  </h1>
);

const HeadingComponent = () => (
  <div className="container">
    {addition}

    {/* It is Component Compositon  */}
    {/* Three Methods of using React Component */}
    <Title />
    <Title></Title>
    {Title()}

    {/* Adding JS inside JSX */}
    <h3>{value}</h3>

    <h1 className="heading">Namaste from React Functional Component.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

// root.render(JSXHeading);

// root.render(heading);