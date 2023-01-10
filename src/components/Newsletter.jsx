import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

export function Newsletter() {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-indigo-50 py-20 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          />
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
                Nenechávej nákup lístku na poslední chvíli
              </p>
              <p className="mt-4 text-lg tracking-tight text-blue-900">
                Po pandemii jsme si zvykli odkládat všechna rozhodnutí na poslední chvíli. Ale neriskujte. Ve středu už možná nebudou lístky k dispozici ;-)
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-blue-900">
                Kup si lístky ještě dnes <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex rounded-3xl py-2.5 pr-2.5 ">
                <Button href="https://hlav.ac/3UiyMo9" className={"mx-auto"}>
                  <span>Lístky na webu Colosseum</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
