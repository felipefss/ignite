import { ReactNode } from 'react';
import NavBar from './components/NavBar';

// Using this inline style to keep this a server component
const style = {
  display: 'flex',
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div style={style}>
      <NavBar />
      {children}
    </div>
  );
}
