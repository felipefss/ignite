import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLoaderData } from 'react-router-dom';
import * as Styled from './styles';

import { Post as PostModel } from '../../models/Post';
import { formatDuration } from '../../utils/date';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export function Post() {
  const { body, comments, createdAt, title, userName, url } = useLoaderData() as PostModel;

  return (
    <Styled.Container>
      <Styled.PostInfo>
        <Styled.PostInfoActions>
          <Styled.Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </Styled.Link>
          <Styled.Link to={url} target="_blank">
            Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Styled.Link>
        </Styled.PostInfoActions>

        <Styled.PostInfoTitle>{title}</Styled.PostInfoTitle>

        <Styled.PostInfoFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {userName}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDuration(createdAt)}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {comments} comentários
          </span>
        </Styled.PostInfoFooter>
      </Styled.PostInfo>

      <Styled.Body>
        <ReactMarkdown>{body}</ReactMarkdown>
      </Styled.Body>
    </Styled.Container>
  );
}
