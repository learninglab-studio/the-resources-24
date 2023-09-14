import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import LLDate from '@/components/info/LLDate'
import Heavy from '@/components/fonts/Heavy'
import { CodeBlock } from '@/components/utilities'
import Gap from '@/components/utilities/Gap'
import Draggable from 'react-draggable'

const inter = Inter({ subsets: ['latin'], weights: ["200", "900"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>The Menu</title>
        <meta name="description" content="Stuff Happening at the Learning Lab this Week" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={inter.className}>
          <Heavy>the menu</Heavy>
          <Draggable>
            <div>mask</div>
          </Draggable>
          <LLDate />
        </div>
      </main>
      <div className={inter.className}>
        <div style={{fontWeight: "200", width: "80%", margin:"auto"}}>
          <h2>links</h2>
          <Gap height="100" />
          <CodeBlock>test test</CodeBlock>
          <ul>
            <li><Link href="/old-menu/main">old menu main</Link></li>
            <li><Link href="/old-menu/main">old menu main</Link></li>
            <li><Link href="/old-menu/main">old menu main</Link></li>
            <li><Link href="/old-menu/main">old menu main</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
