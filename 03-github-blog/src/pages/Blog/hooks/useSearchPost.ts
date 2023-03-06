import { useEffect, useState } from 'react';
import { api } from '../../../lib/axios';

interface Post {
  id: number;
  body: string;
  createdAt: string;
  title: string;
}

interface PostQuery {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

interface QueryResult {
  items: PostQuery[];
}

export function useSearchPost(input?: string) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const searchQuery = input ? input + ' ' : '';
      const query = encodeURIComponent(`${searchQuery}repo:felipefss/ignite`);
      const { data } = await api.get<QueryResult>(`/search/issues?q=${query}`);
      const posts = data.items;

      setPosts(
        posts.map((post) => ({
          id: post.number,
          body: post.body,
          createdAt: post.created_at,
          title: post.title,
        }))
      );
    }

    fetchPosts();
  }, []);

  return posts;
}
