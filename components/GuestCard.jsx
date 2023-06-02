import Image from "next/image"

export default function GuestCard({ img, name }) {
  return (
    <div className="bg-white flex flex-col items-center p-2">
      <Image src={img} className="w-[300px] h-[300px] bg-neutral-500" />
      { name ? <h1 className="text-xl text-black font-bold">{name}</h1> : ""}
    </div>
  )
}
