import styled from 'styled-components';

export const StyledForm = styled.form`
	max-width: 800px;
	display: flex;
	justify-content: center;
    background: #8367C7;
	margin: 0 auto;
	padding: 1rem;
	box-sizing: border-box;
	position: relative;
    z-index: 5;
`;

export const StyledLabel = styled.label`
    font-family: 'Inter Tight', sans-serif;
	display: flex;
	align-items: center;
	align-content: center;
	margin-right: 0.5rem;
	color: white;
	font-size: 0.875rem;
`;

export const StyledFormField = styled.input`
    font-family: 'Inter Tight', sans-serif;
	background: transparent;
	padding: 0.5rem;
	border: 1px solid rgba(255,255,255,0.75);
	color: white;
	border-radius: 0;
	
	&:focus {
		border-color: white;
		outline: none;
	}
`;

export const StyledButton = styled.button`
	font-family: 'Kalam', cursive;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 2px;
	background: #F1D26A;
    border: 1px solid #F1D26A;
	padding: 0.7rem 1rem 0.5rem 1rem;
	border-radius: 0;
	appearance: none;
	cursor: pointer;
	text-decoration: underline;
	text-decoration-color: transparent;
	transition: all 0.3s ease;
	
	&:hover, &:focus, &:active {
		background: #EABB1F;
		text-decoration-color: currentColor;
	}
`;

