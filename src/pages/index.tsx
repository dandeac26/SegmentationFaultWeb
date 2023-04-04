import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      Hello
    </div>
  )
}

// const Home: NextPage = () =>{
//   return <div>Home</div>
// }

// export default Home