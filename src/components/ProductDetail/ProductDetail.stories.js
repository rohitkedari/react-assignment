import React from 'react';
import { storiesOf } from '@storybook/react';
import  ProductDetail from './ProductDetail';

storiesOf('components/ProductDetail', module).add('with default', () => (
	<ProductDetail
		id={1}
		name="Lenovo"
		description="Dummy description"
		category={{id: 1, name: 'Laptop'}} />
));
