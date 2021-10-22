import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./Views/Home/index";
import DetailsPage from "./Views/Details/index";
import { ChakraProvider } from "@chakra-ui/react";

const Routes: React.FC = () => (
	<ChakraProvider>
		<BrowserRouter>
			<Switch>
				<Route exact path="/home" component={HomePage} />
				<Route exact path="/home/:id" component={DetailsPage} />
				<Route><Redirect to="/home" /></Route>
			</Switch>
		</BrowserRouter>
	</ChakraProvider>
);

export default observer(Routes);
