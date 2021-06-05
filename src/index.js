import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from './components/HelloWorld'; //Obtengo mi componenete gracias a react DOM

ReactDOM.render(<HelloWorld />, document.getElementById('app')) //Traer el componente y lo garda en algún elemento del html