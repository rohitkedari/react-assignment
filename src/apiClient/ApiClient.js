import config from '../config';

class ApiClient {
	constructor(baseUrl = null) {
		this.baseUrl = baseUrl;
	}

	get(url, conf = {}) {
		return fetch(this.baseUrl + url, conf)
			.then((response) => Promise.resolve(response))
			.catch((error) => Promise.reject(error));
	}
}

const apiClient = new ApiClient(config.apiBaseUrl);
export { apiClient };