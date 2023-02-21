import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styles';

export function Profile() {
  return (
    <Styled.Container>
      <Styled.Image src="https://via.placeholder.com/148" alt="User photo" />

      <Styled.Info>
        <Styled.Header>
          <Styled.Title>Cameron Williamson</Styled.Title>
          <Styled.Link href="http://github.com" target="_blank" rel="noopener noreferrer">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Styled.Link>
        </Styled.Header>

        <Styled.BodyText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores nobis quis voluptas. Reiciendis,
          magnam. Sunt, ipsa quam natus possimus eum officiis praesentium repellendus quibusdam perspiciatis, veritatis
          nobis! Sunt, temporibus.
        </Styled.BodyText>

        <Styled.Footer>
          <span>
            <FontAwesomeIcon icon={faGithub} /> username
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} /> company
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} /> 32 seguidores
          </span>
        </Styled.Footer>
      </Styled.Info>
    </Styled.Container>
  );
}
