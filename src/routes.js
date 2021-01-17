import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';

const Routes = ({children}) => {
	return (
		<Router>
			<Switch>
				<Route exact path={["/", "/categories/:categoryId"]}>
					<ProductListPage />
				</Route>
				<Route path="/products/:id">
					<ProductDetailPage />
				</Route>
			</Switch>
			{children}
		</Router>
	);
};

export default Routes;

