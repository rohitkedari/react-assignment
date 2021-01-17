import styled from 'styled-components';

const StyledProductDetail = styled('div')`
	max-width: 900px;
	margin: 16px auto;
	display: flex;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;
export const StyledLeftPanel = styled('div')`
	display: flex;
	justify-content: center;
	@media (min-width: 600px) {
		flex: 30%;
		border: 1px solid rgba(0, 0, 0, 0.1);
		margin: 16px;
		padding: 16px;
	}
`;

export const StyledRightPanel = styled('div')`
	margin: 16px;
	@media (min-width: 600px) {
		flex: 70%;
	}
`;
export default StyledProductDetail;
