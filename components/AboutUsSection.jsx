import Link from 'next/link'
import { GoLocation } from 'react-icons/go'
import { BsInstagram } from 'react-icons/bs'
import { RiFacebookCircleLine } from 'react-icons/ri'
import Section from './Section'
import Title from './Title'

export default function AboutUsSection() {
  return (
    <Section id="about-us" className="bg-black/50 backdrop-blur-lg">
      <h1 className='font-SivarPro text-5xl font-bold mb-5'>About Us</h1>
      <div className='flex flex-wrap gap-x-[100px] gap-y-10 items-center'>
        {/* update the years */}
        <p className='max-w-[400px] text-left'>
          CMR Institute of Technology was established in the year 2000 as a unit of CMR Group of Institutions, run by the CMR Jnanadhara Trust.<br />
          Over the past 22 years, CMRIT has strived to achieve excellence in academics as well as in other spheres of student development.<br />
          CMR Institute Of Technology’s Inter Collegiate Festival, Cultura, is to be celebrated on the 09th and 10th of June, 2023, in its 15th year showcasing skill, talent and charisma.
        </p>
        <div>
          <div className='text-xl mt-5 flex gap-10 flex-wrap flex-col'>
            <div>
              <h1>Connect with us for any queries or payment issues</h1>
              <h1>email: random1@random.com</h1>
              <h1>name: random1</h1>
              <h1>email: random2@random.com</h1>
              <h1>name: random2</h1>
            </div>
            <div className='max-w-[300px]'>
              CMR Institute of Technology<br />
              132, AECS Layout
              ITPL Main Road, Kundalahalli Bangalore 560037, India
            </div>
          </div>
          <div className='flex gap-3 text-4xl mt-5'>
            <Link href="https://goo.gl/maps/aKR3oXgKaEGdXfd39"><GoLocation /></Link>
            <Link href="https://instagram.com/cmritcultura"><BsInstagram /></Link>
            <Link href="https://facebook.com/Cultura.cmrit"><RiFacebookCircleLine /></Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
