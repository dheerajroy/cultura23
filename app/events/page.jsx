import EventCard from "@/components/EventCard"
import EventCardsContainer from "@/components/EventCardsContainer"
import Section from "@/components/Section"
import Title from "@/components/Title"
import events from "@/public/finalEvents.json"

export default function Events() {
    return (
        <Section>
            {
                [...new Set(events.Events.map(event => event.Category))].map(cat => {
                    return (
                        <div id={cat.toLowerCase().replace(/\s+/g, '-')} className="pt-5" key={cat}>
                            <div className="mt-[50px]">
                                <Title small={true}>{cat}</Title>
                            </div>
                            <EventCardsContainer>
                                {events.Events.filter(event => event.Category === cat).map(event => {
                                    return <EventCard key={event['Event Name']} title={event['Event Name']} clar={event['Event']} description={event['Description']} slug={event['Event Name'].toLowerCase().trim().replace(/\s+/g, '-')} />
                                })}
                            </EventCardsContainer>
                        </div>
                    )
                })
            }
        </Section >
    )
}
