import React from 'react';
import { storiesOf } from '@storybook/react';
import  ProductDetailContainer from './ProductDetailContainer';

storiesOf('Containers/Product Detail', module).add('with default', () => (
	<ProductDetailContainer id={1} />
));
