import EventCard from "@/components/EventCard"
import EventCardsContainer from "@/components/EventCardsContainer"
import Section from "@/components/Section"
import Title from "@/components/Title"
import Link from "next/link"
import events from "@/public/finalEvents.json"

export default function Events() {
    return (
        <Section>
            {
                [...new Set(events.Events.map(event => event.Category))].map(cat => {
                    return (
                        <div id={cat.toLowerCase().replace(/\s+/g, '-')} className="pt-5" key={cat}>
                            <Title small={true}>{cat}</Title>
                            <EventCardsContainer>
                                {events.Events.filter(event => event.Category === cat).map(event => {
                                    return <EventCard key={event['Event Name']} title={event['Event Name']} clar={event['Event']} description={event['Description']} slug={event['Event Name'].toLowerCase().trim().replace(/\s+/g, '-')} />
                                })}
                            </EventCardsContainer>
                        </div>
                    )
                })
            }

            {/* <div id="art" className="pt-5">
                <Title small={true}>Art</Title>
                <EventCardsContainer>
                    <EventCard title="Doodle Your Way" description="some random text goes here" />
                    <EventCard title="Face Painting" description="some random text goes here" />
                    <EventCard title="Bookmark Painting" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="dance">
                <Title small={true}>Dance</Title>
                <EventCardsContainer>
                    <EventCard title="Kick n Crew" description="some random text goes here" />
                    <EventCard title="Two For Tango" description="some random text goes here" />
                    <EventCard title="Switch Foot" description="some random text goes here" />
                    <EventCard title="1 vs 1" description="some random text goes here" />
                    <EventCard title="Kinkini" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="photography">
                <Title small={true}>Photography</Title>
                <EventCardsContainer>
                    <EventCard title="Seven Deadly Sins (mobile)" description="some random text goes here" />
                    <EventCard title="The Five Senses (DSLR)" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="kannada">
                <Title small={true}>Kannada</Title>
                <EventCardsContainer>
                    <EventCard title="Kannadada Kuvara" description="some random text goes here" />
                    <EventCard title="Ogatina Kurchi" description="some random text goes here" />
                    <EventCard title="Abhinaya chakravarthi" description="some random text goes here" />
                    <EventCard title="K.G.F" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="literary">
                <Title small={true}>Literary</Title>
                <EventCardsContainer>
                    <EventCard title="Proze Puzzle" description="some random text goes here" />
                    <EventCard title="Mock Trial Mayhem" description="some random text goes here" />
                    <EventCard title="Fiction Frenzy" description="some random text goes here" />
                    <EventCard title="The 60 Second Showdown" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="informal">
                <Title small={true}>Informal</Title>
                <EventCardsContainer>
                    <EventCard title="Flex It" description="some random text goes here" />
                    <EventCard title="Blr Nine-Nine" description="some random text goes here" />
                    <EventCard title="Hogathon" description="some random text goes here" />
                    <EventCard title="Fold & Fly" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="fashion">
                <Title small={true}>Fashion</Title>
                <EventCardsContainer>
                    <EventCard title="Fashion Show" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="muses">
                <Title small={true}>Muses</Title>
                <EventCardsContainer>
                    <EventCard title="MS Paint" description="some random text goes here" />
                    <EventCard title="Reel-It" description="some random text goes here" />
                    <EventCard title="Album Cover Design" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="music">
                <Title small={true}>Music</Title>
                <EventCardsContainer>
                    <EventCard title="Group Singing Indian" description="some random text goes here" />
                    <EventCard title="Battle Of Bands" description="some random text goes here" />
                    <EventCard title="Western Acoustics" description="some random text goes here" />
                    <EventCard title="Indian Solo" description="some random text goes here" />
                    <EventCard title="Western Solo" description="some random text goes here" />
                    <EventCard title="Rap battle" description="some random text goes here" />
                    <EventCard title="Instrumental solo" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="theatre">
                <Title small={true}>Theatre</Title>
                <EventCardsContainer>
                    <EventCard title="Improv" description="some random text goes here" />
                    <EventCard title="Monologue" description="some random text goes here" />
                    <EventCard title="Madads" description="some random text goes here" />
                    <EventCard title="Mime" description="some random text goes here" />
                    <EventCard title="Street Play" description="some random text goes here" />
                </EventCardsContainer>
            </div>
            <div id="gaming">
                <Title small={true}>Gaming</Title>
                <EventCardsContainer>
                    <EventCard title="Valorant" description="some random text goes here" />
                    <EventCard title="COD Mobile" description="some random text goes here" />
                    <EventCard title="FIFA" description="some random text goes here" />
                    <EventCard title="F1" description="some random text goes here" />
                </EventCardsContainer>
            </div> */}
        </Section >
    )
}
