import Section from "@/components/Section"
import Title from "@/components/Title"
import Button from "@/components/Button"
import Link from "next/link"
import events from '@/public/finalEvents.json'

export default function Event({ params }) {
    const event = events.Events.filter(event => event['Event Name'].toLowerCase().trim().replace(/\s+/g, '-') === params.event)[0]
    return (
        <Section>
            <div className="flex flex-wrap justify-center gap-5 mt-20">
                <div className="lg:sticky top-[70px] w-[300px] h-[300px] md:w-[500px] lg:h-[500px] bg-neutral-500"></div>
                <div className="max-w-[700px] bg-black/50 backdrop-blur-lg p-5 flex flex-col gap-3 items-center rounded-3xl">
                    <Title small={true}>{event['Event Name']}</Title>
                    <p className="-mt-7 text-center">{event['Description']}</p>
                    <div className="mt-5">
                        <h1 className="font-LUSER text-3xl">Rules and Regulations</h1>
                        <p dangerouslySetInnerHTML={{ __html: event['Rules and Regulations'].replace(/\n/g, '<br /><br />') }} />
                    </div>
                    <Link href={`${event['Reg link']}`} target="_blank">
                        <Button className="text-3xl">Register</Button>
                    </Link>
                </div>
            </div>
        </Section>
    )
}
