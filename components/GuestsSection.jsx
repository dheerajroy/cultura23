import Section from './Section'
import GuestCard from './GuestCard'
import Title from './Title'
import img1 from '@/public/images/gallery/1.jpeg'

export default function GuestsSection() {
  return (
    <Section id="guests">
      <Title>Guests</Title>
      <div className='flex gap-5 justify-center flex-wrap'>
        <GuestCard img={img1} />
        {/* <GuestCard /> */}
        {/* <GuestCard /> */}
        {/* <GuestCard /> */}
      </div>
    </Section>
  )
}
