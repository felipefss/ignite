import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;

  padding: 2.5rem;
  background-color: ${props => props.theme.card};
  border-radius: 6px 44px;
`;

export const Divider = styled.div`
  border: 1px solid ${props => props.theme.button};
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TotalLine = styled.div`
  display: flex;
  justify-content: space-between;

  color: ${props => props.theme.text};
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: 400;

  &:last-child {
    color: ${props => props.theme.subtitle};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;