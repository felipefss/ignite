import styled from "styled-components";

export const PaymentContainer = styled.div`
  background-color: ${props => props.theme.card};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${props => props.theme.purple};
  }
`;

export const Title = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${props => props.theme.subtitle};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${props => props.theme.text};
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Method = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  background-color: ${props => props.theme.button};
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;

  input[type="radio"] {
    display: none;
  }

  svg {
    color: ${props => props.theme.purple};
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