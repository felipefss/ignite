import * as Styled from './styles';

import coverImg from '../../assets/cover.svg';

export function Header() {
  return (
    <Styled.Container>
      <img src={coverImg} alt="" />
    </Styled.Container>
  );
}
