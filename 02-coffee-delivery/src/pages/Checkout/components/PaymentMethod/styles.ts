import styled from "styled-components";

export const MethodContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  background-color: ${props => props.theme.button};
  color: ${props => props.theme.purple};
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;

  input[type="radio"] {
    display: none;
  }

  span {
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${props => props.theme.text};
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${props => props.theme.hover};
  }

  &:has(input[type="radio"]:checked) {
    background-color: ${props => props.theme["purple-light"]};
    border: 1px solid ${props => props.theme.purple};
  }
`;