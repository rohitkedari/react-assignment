import React from 'react';
import { storiesOf } from '@storybook/react';
import  ProductListContainer from './ProductListContainer';
	
storiesOf('Containers/Product List', module).add('with default', () => (
	<ProductListContainer />
));
