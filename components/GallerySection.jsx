import Section from './Section'
import Title from './Title'

export default function GallerySection() {
	return (
		<Section id="gallery">
			<Title>Gallery</Title>
			<div className='flex gap-5 justify-center flex-wrap'>
				<div className='w-[300px] h-[300px] bg-neutral-500' />
				<div className='w-[300px] h-[300px] bg-neutral-500' />
				<div className='w-[300px] h-[300px] bg-neutral-500' />
				<div className='w-[300px] h-[300px] bg-neutral-500' />
				<div className='w-[300px] h-[300px] bg-neutral-500' />
				<div className='w-[300px] h-[300px] bg-neutral-500' />
			</div>
		</Section>
	)
}
