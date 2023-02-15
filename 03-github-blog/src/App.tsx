import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
