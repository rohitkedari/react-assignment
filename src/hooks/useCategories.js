import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { categoriesClient } from "../apiClient/categories";

const useCategories = (categoryId) => {
	const [categories, setCategories] = useState([]);
	const [selectedCatId, setSelectedCatId] = useState();
	const history = useHistory();

	useEffect(() => {
		categoriesClient.getCategories()
			.then(response => response.json())
			.then(categories => {
				setCategories(categories);
				let category;				
				if (categoryId) {
					category = categories.find((category) => {
						return category.id === categoryId;
					});
				}
				const selectedCatId = (category && category.id) ||
					(categories && categories.length > 0 && categories[0].id);
				setSelectedCatId(selectedCatId);
			});
	}, []);

	useEffect(() => {
		if (selectedCatId) {
			history.push(`/categories/${selectedCatId}`);
		}
	}, [selectedCatId]);

	return {
		categories,
		selectedCatId,
		setSelectedCatId,
	}
};

export default useCategories;