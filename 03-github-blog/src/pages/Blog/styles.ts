import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto 0;

  display: flex;
  flex-direction: column;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 4.5rem 0 0.75rem;
`;

export const CounterTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme.subtitle};
`;

export const Counter = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.span};
`;

export const SearchInput = styled.input`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.input};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 6px;
  width: 100%;
  padding: 0.75rem 1rem;

  &::placeholder {
    color: ${(props) => props.theme.label};
  }

  &:focus {
    outline: solid ${(props) => props.theme.blue};
  }
`;

export const CardList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  grid-auto-rows: 16.25rem;
  margin: 3rem 0;
`;
