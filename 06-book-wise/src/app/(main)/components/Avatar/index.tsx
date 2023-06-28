import * as AvatarImg from '@radix-ui/react-avatar';

import * as Styled from './styles';

interface Props {
  size: number;
}

export default function Avatar({ size }: Props) {
  return (
    <Styled.AvatarContainer>
      <AvatarImg.Image src="https://github.com/felipefss.png" alt="Felipe Santos" width={size} />
      <AvatarImg.Fallback>FS</AvatarImg.Fallback>
    </Styled.AvatarContainer>
  );
}
