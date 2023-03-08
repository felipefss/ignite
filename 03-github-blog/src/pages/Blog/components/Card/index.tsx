import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { formatDuration } from '../../../../utils/date';

import * as Styled from './styles';

interface CardProps {
  id: number;
  title: string;
  createdAt: string;
  body: string;
}

export function Card({ id, title, createdAt, body }: CardProps) {
  return (
    <Styled.Container>
      <Styled.Header>
        <Link to={`/post/${id}`}>
          <h3>{title}</h3>
        </Link>
        <span>{formatDuration(createdAt)}</span>
      </Styled.Header>

      <ReactMarkdown>{`${body.slice(0, 180)}...`}</ReactMarkdown>
    </Styled.Container>
  );
}
