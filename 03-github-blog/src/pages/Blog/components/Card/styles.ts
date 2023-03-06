import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.post};
  border-radius: 10px;
  padding: 2rem;
  overflow-y: hidden;
`;

export const Header = styled.header`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.25rem;

  a {
    text-decoration: none;
    flex: 1;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${(props) => props.theme.title};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.span};
  }
`;
