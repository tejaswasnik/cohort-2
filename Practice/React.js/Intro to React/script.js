// var h1 = document.createElement('h1');
// h1.innerHTML = "Hello from JS";

// document.body.appendChild(h1)


var h1 = React.createElement('h1',null,"Hello From React");
var root = document.querySelector("#root");

var root = ReactDOM.createRoot(root);
root.render(h1);