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
