import Section from './Section'
import GuestCard from './GuestCard'
import Title from './Title'

export default function GuestsSection() {
  return (
    <Section id="guests">
      <Title>Guests</Title>
      <div className='flex gap-5 justify-center flex-wrap'>
        <GuestCard />
        <GuestCard />
        <GuestCard />
        <GuestCard />
      </div>
    </Section>
  )
}
