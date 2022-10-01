import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 2.5rem 0;
`;

export const Title = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${props => props.theme.subtitle};
  margin-bottom: 1rem;
`;