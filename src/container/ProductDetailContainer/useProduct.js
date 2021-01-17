import { useEffect, useState } from "react"
import { productsClient } from "../../apiClient/products";

const useProduct = (id) => {
	const [product, setProduct] = useState(null);

	const getProductById = (id) => {
		productsClient.getProduct(id)
			.then(response => response.json())
			.then(json => setProduct(json));
	};

	useEffect(() => {
		if (id) {
			getProductById(id);
		}
	}, [id]);

	return {
		product,
	}
};

export default useProduct;