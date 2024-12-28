import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// High Order Components
// function App(props) {
// 	return (
// 		<h1>
// 			!{props.greeting}, {props.name}
// 		</h1>
// 	);
// }

// function withGreeting(WrappedComponent) {
// 	return function WrappedComponentWithGreeting(greeting) {
// 		return function TrulyComponent(props) {
// 			return (
// 				<React.Fragment>
// 					<WrappedComponent {...props} greeting={greeting} />
// 					<p>We go among the WrappedComponent</p>
// 				</React.Fragment>
// 			);
// 		};
// 	};
// }

// const AppWithGreeting = withGreeting(App)("Hello!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppWithGreeting name="Jane" />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
