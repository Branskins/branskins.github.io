import Layout from './layout'
import '@/styles/globals.css'
import './home/home.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo({
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={heebo.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
