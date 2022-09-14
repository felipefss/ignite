import styled from "styled-components";

import Background from '../../../../assets/Background.svg';

interface IconProps {
  bgColor: 'yellow' | 'yellow-dark' | 'text' | 'purple';
}

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 3.5rem;
  width: 100%;
  padding: 5.875rem 10rem;
  background: url(${Background});
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 36.75rem;
  margin-bottom: 4.125rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${props => props.theme.title};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme.subtitle};
  }
`;

export const Features = styled.div`
  max-width: 35.4375rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;
`;

export const FeaturesItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    line-height: 1.3;
  }
`;

export const Icon = styled.div<IconProps>`
  background-color: ${({ theme, bgColor }) => theme[bgColor]};
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
`;
