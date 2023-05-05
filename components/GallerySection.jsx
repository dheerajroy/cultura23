import Image from 'next/image'
import Section from './Section'
import Title from './Title'
import img1 from '@/public/images/gallery/1.jpeg'
import img2 from '@/public/images/gallery/2.jpeg'
import img3 from '@/public/images/gallery/3.jpeg'
import img4 from '@/public/images/gallery/4.jpeg'

export default function GallerySection() {
	return (
		<Section id="gallery">
			<Title>Gallery</Title>
			<div className='flex gap-5 justify-center flex-wrap [&>img]:w-[300px]'>
				<Image src={img1} />
				<Image src={img2} />
				<Image src={img3} />
				<Image src={img4} />
			</div>
		</Section>
	)
}
