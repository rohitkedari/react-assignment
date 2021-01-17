import { apiClient } from './ApiClient';

const productsClient = {
	getProducts(categoryId) {
		return apiClient.get(`products?categoryId=${categoryId}`);
	},
	getProduct(productId) {
		return apiClient.get(`productDetails/${productId}`);
	},
};

export { productsClient };