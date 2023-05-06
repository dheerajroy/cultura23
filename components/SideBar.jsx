"use client"

import Link from "next/link"
import { useEffect } from 'react'

export default function SideBar({ sideBarState, setSideBarState }) {
    useEffect(() => {
        let sideBar = document.querySelector('.sidebar')
        let sideLinks = document.querySelectorAll('.side-links a')
        console.log(sideLinks)
        sideLinks.forEach(link => {
            link.onclick = (e) => {
                sideBar.classList.toggle('display-menu')
                setSideBarState(!sideBarState)
            }
        })
    })

    return (
        <div className="sidebar grid place-items-center fixed w-[300px] h-screen bg-black/60 backdrop-blur-lg right-[-300px] duration-500 z-10">
            <div className="flex flex-col gap-10 text-2xl side-links">
                <Link href="/">Home</Link>
                <Link href="/#events">Events</Link>
                {/* <Link href="/#guests">Guests</Link> */}
                <Link href="/#gallery">Gallery</Link>
                <Link href="/#about-us">About us</Link>
                {/* <button className='border-red-500 border-2 rounded-full p-2 transition ease-in-out delay-300 hover:bg-red-500'>BOOK TICKET</button> */}
            </div>
        </div>
    )
}
