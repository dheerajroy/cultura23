import Link from "next/link"
import Button from "./Button"

export default function EventCard({ title, clar, description, slug }) {
    return (
        <div className="bg-black/50 backdrop-blur-lg p-5 rounded-xl flex flex-col justify-between gap-5 font-SivarPro w-[300px]">
            <div>
            <h1 className="text-3xl font-LUSER tracking-widest">{title}</h1>
            {clar ? <h2 className="text-lg">({clar})</h2> : ""}
            </div>
            <p className="text-lg">{description}</p>
            <Link href={`/events/${slug}`}>
                <Button>Register</Button>
            </Link>
        </div>
    )
}
