import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/nav/nav'
export default function Home() {
  return (
    <main className={styles.main}>
      <Nav/>
    </main>
  )
}
