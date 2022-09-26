import styled from "styled-components";

export const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background-color: ${props => props.theme.button};
  border-radius: 6px;
  padding: 0.5rem;
`;

export const CounterButton = styled.span`
  cursor: pointer;
  color: ${props => props.theme.purple};

  &:hover {
    color: ${props => props.theme["purple-dark"]};
  }
`;

export const Count = styled.span`
  font-size: 1rem;
  line-height: 1.3;
  text-align: center;
  width: 1.25rem;
  height: 1.3125rem;
`;