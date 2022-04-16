import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
	uri: `${process.env.REACT_APP_URL}/graphql`,
	cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ApolloProvider>
	</BrowserRouter>
);
