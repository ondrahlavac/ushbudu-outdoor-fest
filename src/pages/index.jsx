import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Tickets } from '@/components/Tickets'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ushbu-du Outdoor Fest - Přijďte naplánovat své výlety</title>
        <meta
          name="description"
          content="Ushbu-du Outdoor Festival vám přináší zajímavé příběhy od ne vždy uplně známých cestovatelů a sportovců. Snažíme se vás inspirovat k výkonům, o kterých jste ani nevěděli, že na ně máte."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Tickets />
        <Sponsors />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
