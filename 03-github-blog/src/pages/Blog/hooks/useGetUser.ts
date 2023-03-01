import { useEffect, useState } from 'react';
import { api } from '../../../lib/axios';

const USERNAME = 'felipefss';

interface User {
  avatarUrl: string;
  bio: string;
  company: string;
  followers: number;
  name: string;
  profileUrl: string;
  userName: string;
}

export function useGetUser() {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    async function fetchUser() {
      const { avatar_url, bio, company, followers, html_url, name, login } = await (
        await api.get(`/users/${USERNAME}`)
      ).data;

      setUser({
        avatarUrl: avatar_url,
        bio,
        company,
        followers,
        name,
        profileUrl: html_url,
        userName: login,
      });
    }

    fetchUser();
  }, []);

  return user;
}
