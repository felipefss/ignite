import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 864px;
  margin: 0 auto 0;

  display: flex;
  flex-direction: column;
`;

export const PostInfo = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.profile};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -10%;
  padding: 2rem;
  padding-left: 2.5rem;
`;

export const PostInfoActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${(props) => props.theme.blue};
  text-decoration: none;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: ${(props) => props.theme.blue};
  }
`;

export const PostInfoTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme.title};

  margin: 1.25rem 0 0.5rem;
`;

export const PostInfoFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${(props) => props.theme.span};

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme.label};
  }
`;

export const Body = styled.section`
  padding: 2.5rem 2rem;
`;
