import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductDetailPage from './ProductDetailPage';
	
storiesOf('Pages/Product Detail', module).add('with default', () => (
	<ProductDetailPage />
));
