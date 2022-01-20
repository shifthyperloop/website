import '../styles.css'
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if(process.env.NEXT_PUBLIC_ANALYTICS_ID) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_ANALYTICS_ID);
      ReactGA.send("pageview");
    }
  });

  return <Component {...pageProps} />
}

export default App;
