import React from 'react';
import { storiesOf } from '@storybook/react';
import  ProductTile from './ProductTile';

storiesOf('components/ProductTile', module).add('ProductTile with default', () => (
	<ProductTile id={1} name="Lenovo" />
));
