const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "i am an h1"),
    React.createElement("h2", { id: "heading2" }, "i am an h2"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "i am an h1"),
    React.createElement("h2", { id: "heading2" }, "i am an h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
