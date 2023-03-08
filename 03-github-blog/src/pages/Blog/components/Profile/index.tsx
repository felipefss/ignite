import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetUser } from '../../hooks/useGetUser';
import * as Styled from './styles';

export function Profile() {
  const { avatarUrl, bio, company, followers, name, profileUrl, userName } = useGetUser();

  return (
    <Styled.Container>
      <Styled.Image src={avatarUrl} alt="User photo" />

      <Styled.Info>
        <Styled.Header>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Link href={profileUrl} target="_blank">
            Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Styled.Link>
        </Styled.Header>

        <Styled.BodyText>{bio || 'No bio'}</Styled.BodyText>

        <Styled.Footer>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {userName}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} /> {company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} /> {followers} seguidores
          </span>
        </Styled.Footer>
      </Styled.Info>
    </Styled.Container>
  );
}
