import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import * as Styled from './styles';

interface CardProps {
  id: number;
  title: string;
  createdAt: string;
  body: string;
}

function getDaysDurationFromCreatedAt(createdAt: string): number {
  const createdMs = Date.parse(createdAt);
  const now = Date.now();
  const result = (now - createdMs) / 86400000;

  return Math.round(result);
}

export function Card({ id, title, createdAt, body }: CardProps) {
  const daysCreated = getDaysDurationFromCreatedAt(createdAt);
  return (
    <Styled.Container>
      <Styled.Header>
        <Link to={`/post/${id}`}>
          <h3>{title}</h3>
        </Link>
        <span>
          Há {daysCreated} dia{daysCreated > 1 && 's'}
        </span>
      </Styled.Header>

      <ReactMarkdown>{`${body.slice(0, 180)}...`}</ReactMarkdown>
    </Styled.Container>
  );
}
