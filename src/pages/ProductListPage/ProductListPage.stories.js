import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductListPage from './ProductListPage';
	
storiesOf('Pages/Product List', module).add('with default', () => (
	<ProductListPage />
));
