import { useEffect, useState } from "react"
import { productsClient } from "../apiClient/products";

const useProducts = (selectedCatId) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		if (selectedCatId) {
			productsClient.getProducts(selectedCatId)
				.then(response => response.json())
				.then(json => setProducts(json));
		}
	}, [selectedCatId]);

	return {
		products,
	}
};

export default useProducts;