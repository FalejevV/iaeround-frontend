import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header/Header'
import Head from 'next/head'
import { Provider } from 'react-redux';
import { store } from '../store/store'
import Footer from '../components/Footer/Footer'
import { FlexThemeProvider } from '../components/Styles.styled'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <Provider store={store}>
    <FlexThemeProvider theme={{
      accentColor: "#21612D"
    }}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" /> 
          <title>Routes around IAE</title>
          <meta name="description" content="WebDev practice project. Website that containts bike routes around Ignalina nuclear power plant"></meta>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer/>
    </FlexThemeProvider>
  </Provider>
  )
}
