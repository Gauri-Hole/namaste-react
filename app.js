/*
*
<div id:"parent">
    <div id":"child">
        <h1></h1>
        <h2></h2>
    </div>
</div>
*/

const heading = React.createElement("div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
    [React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2")]
)
)


// const heading = React.createElement("h1", {id:"heading"}, "Hello from react..")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading);