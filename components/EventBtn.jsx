import Image from "next/image"
import barcodeImg from "@/public/images/barcode.png"

export default function EventBtns({ text, img }) {
    return (
        <div className="event-card select-none active:brightness-50 cursor-pointer">
            <div className="flex justify-between items-center max-w-full">
                <Image src={barcodeImg} alt='' height={100} className="-mr-[30px] ml-4" />
                <h1 className="font-SivarPro text-2xl">{text}</h1>
                <Image src={img} alt='' height={50} />
            </div>
        </div>
    )
}
