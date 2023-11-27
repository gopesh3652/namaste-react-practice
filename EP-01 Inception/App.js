// const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");


const root = ReactDOM.createRoot(document.getElementById("root"));


// nested Html structure using react

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm H1 inside div inside div."),
    React.createElement("h2", {}, "I'm H2 inside div inside div."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm H1 inside div inside div."),
    React.createElement("h2", {}, "I'm H2 inside div inside div."),
  ]),
]);


root.render(parent);