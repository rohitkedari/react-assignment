import { useCallback, useEffect, useReducer } from "react";
import { useHistory, useParams } from "react-router-dom";
import { categoriesClient } from "../apiClient/categories";

const reducer = (state, action) => {
	switch (action.type) {
		case 'categories/fecth-success':
			return {
				...state,
				...action.data
			};
		case 'categories/selectCategory':
				return {
					...state,
					...action.data
				};	
		default:
			return state;
	}
}

const getSelectedCategory = (categories, categoryId) => {
	let category;				
	if (categoryId) {
		category = categories.find((category) => {
			return category.id === categoryId;
		});
	}	
	return (category && category.id) ||
		(categories && categories.length > 0 && categories[0].id);
};

const useCategories = (categoryId) => {
	const [state, dispatch] = useReducer(reducer, {categories: []});
	const history = useHistory();

	const changeSelectedCategory = (selectedCatId) => {
		history.push(`/categories/${selectedCatId}`);
	};

	useEffect(() => {
		categoriesClient.getCategories()
			.then(response => response.json())
			.then(categories => {
				const selectedCatId = getSelectedCategory(categories, categoryId);
				if (selectedCatId) {					
					dispatch({
						type: 'categories/fecth-success',
						data: {
							categories,
							selectedCatId
						}
					});
				}
			});
	}, []);

	useEffect(() => {
		const selectedCatId =
			getSelectedCategory(state.categories, categoryId);
		if (selectedCatId) {
			dispatch({
				type: 'categories/selectCategory',
				data : {
					selectedCatId
				}
			});
		}
	}, [categoryId]);

	return {
		...state,
		changeSelectedCategory,
	}
};

export default useCategories;