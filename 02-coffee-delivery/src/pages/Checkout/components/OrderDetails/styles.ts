import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  padding: 2.5rem;
  background-color: ${props => props.theme.card};
  border-radius: 6px 44px;
`;

export const Divider = styled.div`
  border: 1px solid ${props => props.theme.button};
  width: 100%;
`;