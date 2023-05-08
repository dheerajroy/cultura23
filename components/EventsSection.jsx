import Section from "./Section"
import artImg from '@/public/images/tickets/art.png'
import danceImg from "@/public/images/tickets/dance.png"
import photoImg from "@/public/images/tickets/photography.png"
import kannadaImg from "@/public/images/tickets/kannada.png"
import literaryImg from "@/public/images/tickets/literary.png"
import informalImg from "@/public/images/tickets/informal.png"
import fashionImg from "@/public/images/tickets/fashion.png"
import musesImg from "@/public/images/tickets/muses.png"
import musicImg from "@/public/images/tickets/music.png"
import theatreImg from "@/public/images/tickets/theatre.png"
import techImg from "@/public/images/tickets/technical.png"
import gamingImg from "@/public/images/tickets/gaming.png"
import Title from "./Title"
import Link from "next/link"
import Image from "next/image"

export default function EventsSection() {
  return (
    <Section id="events">
      <Title>Events</Title>
      <div className="flex flex-wrap gap-x-14 gap-y-20 justify-center events-btn-container">
        <Link href="/events#music">
          <Image src={musicImg} />
        </Link>
        <Link href="/events#dance">
          <Image src={danceImg} />
        </Link>
        <Link href="/events#literary">
          <Image src={literaryImg} />
        </Link>
        <Link href="/events#photography">
          <Image src={photoImg} />
        </Link>
        <Link href="/events#digital-media">
          <Image src={musesImg} />
        </Link>
        <Link href="/events#theatre">
          <Image src={theatreImg} />
        </Link>
        <Link href="/events#kannada">
          <Image src={kannadaImg} />
        </Link>
        <Link href="/events#art">
          <Image src={artImg} />
        </Link>
        <Link href="/events#fashion">
          <Image src={fashionImg} />
        </Link>
        <Link href="/events#technical">
          <Image src={techImg} />
        </Link>
        <Link href="/events#informal">
          <Image src={informalImg} />
        </Link>
        <Link href="/events#gaming">
          <Image src={gamingImg} />
        </Link>
      </div>
    </Section>
  )
}
