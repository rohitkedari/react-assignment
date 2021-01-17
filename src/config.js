const commonConfig = {
	isProd: process.env.NODE_ENV === 'production',
	isDev: process.env.NODE_ENV === 'development',
	apiBaseUrl: 'http://localhost:3001/',
};

const prodConfig = {
	...commonConfig,
};

const devConfig = {
	...commonConfig,
};

const configuration = commonConfig.isProd ? prodConfig : devConfig;
export default configuration;
