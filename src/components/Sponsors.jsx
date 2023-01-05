import Image from 'next/image'

import { Container } from '@/components/Container'
import logoSkimoshop from '@/images/logos/skimoshop.svg'
import logoLokalBlok from '@/images/logos/lokalblok.svg'
import logoLucifer from '@/images/logos/lucifer.svg'
import logoEkonomPrahaOutdoor from '@/images/logos/ekonomprahaoutdoor.svg'
import logoAdventureMenu from '@/images/logos/adventuremenu.svg'
import logoCrazyIdea from '@/images/logos/crazy.svg'

const sponsors = [
  { name: 'CrazyIdea', logo: logoCrazyIdea, url: '//www.crazyidea.cz' },
  { name: 'AdvenureMenu', logo: logoAdventureMenu, url: '//www.adventuremenu.com' },
  { name: 'Mirage', logo: logoLokalBlok, url: '//lokalblok.cz' },
  { name: 'StaticKit', logo: logoEkonomPrahaOutdoor, url: '//outdoor.vse.cz' },
  { name: 'Laravel', logo: logoSkimoshop, url: '//www.skimoshop.cz' },
  { name: 'Statamic', logo: logoLucifer, url: '//luciferlights.net' },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          Partneři festivalu
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-y-12 gap-x-32 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center hover:scale-110 transition duration-300 ease-in-out"
            >
              <a href={sponsor.url} target={'_blank'} rel={'noreferrer'}>
                <Image src={sponsor.logo} alt={sponsor.name} unoptimized/>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
