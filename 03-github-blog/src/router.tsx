import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { Blog } from './pages/Blog';
import { Post } from './pages/Post';

import { api } from './lib/axios';

import { Post as PostModel } from './models/Post';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Blog />,
      },
      {
        path: '/post/:id',
        element: <Post />,
        loader: async ({ params }) => {
          const request = await api.get(`/repos/felipefss/ignite/issues/${params.id}`);
          const post = request.data;

          return {
            id: post.number,
            body: post.body,
            comments: post.comments,
            createdAt: post.created_at,
            title: post.title,
            url: post.html_url,
            userName: post.user.login,
          } satisfies PostModel;
        },
      },
    ],
  },
]);
