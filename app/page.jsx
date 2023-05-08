import IndexSection from '@/components/IndexSection'
import EventsSection from '@/components/EventsSection'
import GallerySection from '@/components/GallerySection'
import AboutUsSection from '@/components/AboutUsSection'
import GuestsSection from '@/components/GuestsSection'
import SideBar from '@/components/SideBar'

export default function Home() {
  return (
    <>
      {/* Developed by D Dheeraj */}
      <IndexSection />
      <EventsSection />
      {/* <GuestsSection /> */}
      <GallerySection />
      <AboutUsSection />
    </>
  )
}
