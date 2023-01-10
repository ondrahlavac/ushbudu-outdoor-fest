import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    date: 'Časový harmonogram festivalu',
    dateTime: '2023-01-11',
    summary: '',
    timeSlots: [
      {
        name: 'Doors open',
        description: 'Drinks, food, meet\'n\'greet',
        start: '16:00',
        end: '17:00',
      },
      {
        name: 'Zahájení festivalu',
        description: 'Ondra Hlaváč a Ondra Vosecký',
        start: '17:00',
        end: '17:30',
      },
      {
        name: 'Petr "Dochees" Dočekal',
        description: 'Kanadský bajkový schredding',
        start: '17:30',
        end: '18:15',
      },
      {
        name: 'Pauza',
        description: null,
        start: '18:15',
        end: '18:45',
      },
      {
        name: 'Ondřej Vosecký a Ondra Hlaváč',
        description: 'S lyžemi a dronem po Iráku',
        start: '18:45',
        end: '19:45',
      },
      {
        name: 'Pauza',
        description: null,
        start: '19:45',
        end: '20:15',
      },
      {
        name: 'Yannick Besançon a Tom Baud',
        description: 'Nomad Lines - Freeskiing in Kazachstan',
        start: '20:15',
        end: '21:00',
      },
      {
        name: 'Pauzička',
        description: null,
        start: '21:00',
        end: '21:15',
      },
      {
        name: 'Josef Little',
        description: 'O lezení a sólování',
        start: '21:15',
        end: '22:15',
      },
      {
        name: 'Pauzička',
        description: null,
        start: '22:15',
        end: '22:30',
      },
      {
        name: 'Ondra Pekárek',
        description: 'Kyrgyzstan - Back in Time',
        start: '22:30',
        end: '23:00',
      },
      {
        name: 'Závěr festivalu',
        description: 'přesun na afterparty',
        start: '23:00',
        end: '03:00',
      },
    ],
  },
]

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end}`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}+01:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}+01:00`}>
              {timeSlot.end}
            </time>{' '}
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
      schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Jeden večer, pět příběhů, osm prezentujících a nekonečně zážitků.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Jaké to je, sbalit celý svůj život do dodávky a odjet žít do Kanady. Vzít člověka,
            se kterým máte jen málo co společné a vydat se napříč Kazachstánem? Vzít si skialpy
            a odletět do Bagdádu? Nebo být sokolíkem a sólovat cesty, ze kterých mají respekt
            i zkušení lezci s čtyřnásobkem let zkušeností?
            Odpovědi na přesně tyhle otázky se dozvíte na Ushbu-du Outdoor Festu v kine Aero.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
