import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Ushbu-du Outdoor Fest - </span>Večer plný přednášek, příběhů a
            krátkých filmů.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Chcete vyrazit do přírody na výlet a sbíráte inspiraci na ty nejzajímavější destinace?
              Potřebujete domluvit víkendovou akci v Alpách a chcete potkat ty správné parťáky?
              Pak je Ushbu-du Outdoor Fest více než vhodná akce, kam zajít.
            </p>
            <p>
              Ushbu-du Outdoor Fest vám přináší zajímavé příběhy od ne vždy uplně známých cestovatelů a sportovců.
              Snažíme se vás inspirovat k výkonům, o kterých jste ani nevěděli, že na ně máte.
            </p>
          </div>
          <Button href="#tickets" className="mt-10 w-full sm:hidden">
            Kupte si lístek ještě dnes
          </Button>
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Přednášek', '5'],
              ['Maximum návštěvníků', '324'],
              ['Prostor', 'Kino Aero'],
              ['Lokalita', 'Praha, Česko'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
