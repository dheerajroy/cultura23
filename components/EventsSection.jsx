import Section from "./Section"
import EventBtn from "./EventBtn"
import artImg from '@/public/images/art.png'
import danceImg from "@/public/images/dance.png"
import photoImg from "@/public/images/photo.png"
import kannadaImg from "@/public/images/kannada.png"
import literaryImg from "@/public/images/literary.png"
import informalImg from "@/public/images/informal.png"
import fashionImg from "@/public/images/fashion.png"
import musesImg from "@/public/images/muses.png"
import musicImg from "@/public/images/music.png"
import theatreImg from "@/public/images/theatre.png"
import techImg from "@/public/images/tech.png"
import gamingImg from "@/public/images/game.png"
import Title from "./Title"
import Link from "next/link"

export default function EventsSection() {
  return (
    <Section id="events">
      <Title>Events</Title>
        <div className="flex flex-wrap gap-x-14 gap-y-20 justify-center">
          <Link href="/events#art">
            <EventBtn text="ART" img={artImg} />
          </Link>
          <Link href="/events#dance">
            <EventBtn text="DANCE" img={danceImg} />
          </Link>
          <Link href="/events#photography">
            <EventBtn text="PHOTOGRAPHY" img={photoImg} />
          </Link>
          <Link href="/events#kannada">
            <EventBtn text="KANNADA" img={kannadaImg} />
          </Link>
          <Link href="/events#literary">
            <EventBtn text="LITERARY" img={literaryImg} />
          </Link>
          <Link href="/events#informal">
            <EventBtn text="INFORMAL" img={informalImg} />
          </Link>
          <Link href="/events#fashion">
            <EventBtn text="FASHION" img={fashionImg} />
          </Link>
          <Link href="/events#digital-media">
            <EventBtn text="MUSES" img={musesImg} />
          </Link>
          <Link href="/events#music">
            <EventBtn text="MUSIC" img={musicImg} />
          </Link>
          <Link href="/events#theatre">
            <EventBtn text="THEATRE" img={theatreImg} />
          </Link>
          <Link href="/events#technical">
            <EventBtn text="TECHNICAL" img={techImg} />
          </Link>
          <Link href="/events#gaming">
            <EventBtn text="GAMING" img={gamingImg} />
          </Link>
        </div>
    </Section>
  )
}
