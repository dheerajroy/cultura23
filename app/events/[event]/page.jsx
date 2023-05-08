import Section from "@/components/Section"
import Title from "@/components/Title"
import Button from "@/components/Button"
import Link from "next/link"
import Image from "next/image"
import events from '@/public/finalEvents.json'

export default function Event({ params }) {
    const event = events.Events.filter(event => event['Event Name'].toLowerCase().trim().replace(/\s+/g, '-') === params.event)[0]
    const img = require(`/public/images/posters/${event['Event Name'].trim()}.png`)

    return (
        <Section>
            <div className="flex flex-wrap justify-center gap-5 mt-20">
                {/* <div className="lg:sticky top-[70px] w-[300px] h-[300px] md:w-[500px] lg:h-[500px] bg-neutral-500"></div> */}
                <div>
                    <Image src={`/images/posters/${event['Event Name'].trim()}.png`} width={300} height={300} className="lg:sticky top-[70px] w-[300px] h-[300px] md:w-[500px] lg:h-[500px] bg-neutral-500 rounded-xl" />
                </div>
                <div className="max-w-[700px] bg-black/50 backdrop-blur-lg p-5 flex flex-col justify-between gap-3 items-center rounded-3xl">
                    <Title small={true}>{event['Event Name']}</Title>
                    <p className="-mt-7 text-center">{event['Description']}</p>
                    <div className="mt-5">
                        {event['Rules and Regulations'] ? <h1 className="font-LUSER text-3xl">Rules and Regulations</h1> : ""}
                        <p className="font-sans" dangerouslySetInnerHTML={{ __html: event['Rules and Regulations'].replace(/\n/g, '<br /><br />') }} />
                    </div>
                    <Link href={`${event['Reg link']}`} target="_blank">
                        <Button className="text-3xl">Register</Button>
                    </Link>
                </div>
            </div>
        </Section>
    )
}
