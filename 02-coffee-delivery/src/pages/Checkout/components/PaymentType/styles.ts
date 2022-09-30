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