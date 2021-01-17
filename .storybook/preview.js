import {
	BrowserRouter as Router,
} from "react-router-dom";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const routerDecorator = (storyFun) => {
	return (
		<Router>
			{storyFun()}
		</Router>
	)
}

export const decorators = [routerDecorator];