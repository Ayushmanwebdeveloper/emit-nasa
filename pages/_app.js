import '../assets/css/styles.css'
import '../styles/global.css'
import '../styles/nav.scss'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
    return( <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
         )
}