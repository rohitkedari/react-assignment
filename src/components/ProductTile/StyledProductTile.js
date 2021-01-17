import styled from 'styled-components';

const StyledProductTile = styled('div')`
	box-shadow: 0 0 0 1px rgba(67, 41, 163, 0.08),
		0 1px 5px 0 rgba(67, 41, 163, 0.08);
	&:hover {
		box-shadow: 0 0 0 1px rgba(67, 41, 163, 0.2),
			0 1px 5px 0 rgba(67, 41, 163, 0.2);
	}
	padding: 12px;
	text-align: center;
	img {
		height: 120px;
	}
`;

export default StyledProductTile;
