import { apiClient } from './ApiClient';

const categoriesClient = {
	getCategories() {
		return apiClient.get(`categories`);
	},
};

export { categoriesClient };