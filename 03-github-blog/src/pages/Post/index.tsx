import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styles';

export function Post() {
  return (
    <Styled.Container>
      <Styled.PostInfo>
        <Styled.PostInfoActions>
          <Styled.Link to="#">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Styled.Link>
          <Styled.Link to="#" reloadDocument>
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Styled.Link>
        </Styled.PostInfoActions>

        <Styled.PostInfoTitle>Javascript data types and data structure</Styled.PostInfoTitle>

        <Styled.PostInfoFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            username
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </Styled.PostInfoFooter>
      </Styled.PostInfo>

      <Styled.Body>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde neque porro accusantium quidem quis? Harum
          velit provident id voluptatibus vero nihil voluptatum, voluptates magni adipisci quibusdam quisquam dolore
          mollitia minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, omnis atque? Necessitatibus,
          assumenda! Aliquid facilis nulla odio saepe provident asperiores deleniti voluptate? Suscipit, fugit.
          Assumenda itaque consequuntur ratione corrupti aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur dolor eos magnam sint illum, id, fugit ducimus hic obcaecati officiis eum dicta reiciendis
          enim placeat et? Vitae reprehenderit tempora quod.
        </div>
      </Styled.Body>
    </Styled.Container>
  );
}
