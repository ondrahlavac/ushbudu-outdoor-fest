import { Container } from '@/components/Container'
import Link from "next/link";

export function Tickets() {
  return (
      <section id="tickets" aria-label="Tickets" className="py-20 sm:py-32">
      <div className={"relative"}>
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className={"relative"}>
        <div>
          <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
            Pojistěte si lístky ještě teď
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
              Lístky si můžete koupit přímo zde,
              přes <Link href="https://www.kinoaero.cz/?projection=13681" className="text-blue-600 hover:text-blue-500">web kina Aero</Link>,
              nebo <Link href="https://hlav.ac/3UiyMo9" className="text-blue-600 hover:text-blue-500">v síti Colosseum</Link>.
          </p>
        </div>
        <div className="mx-auto mt-20">
          <iframe src={"https://kinoaero.colosseum.eu/incoming.aspx?mrsid=6&eventid=123488"}
                  style={{"border":"none"}}
                  className={'shadow-xl shadow-blue-900/5'}
                  width={"100%"}
                  height={"500px"}></iframe>
        </div>

      </Container>
      </div>
      </section>
  )
}
