import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  html: {
    fontFamily: 'Inter',
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;