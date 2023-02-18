import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  background-color: ${(props) => props.theme.profile};
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  margin-top: -10%;
  padding: 2rem;
  padding-left: 2.5rem;
`;

export const Image = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const Info = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 0.5rem;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme.title};
`;

export const Link = styled.a`
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

export const BodyText = styled.span`
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1.5rem;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme.label};
  }
`;
