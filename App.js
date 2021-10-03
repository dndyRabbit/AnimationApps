import React from "react";
import AppNavigation from "./src/navigator/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux";

const App = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<AppNavigation />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
