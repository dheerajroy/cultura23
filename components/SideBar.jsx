"use client"

import Link from "next/link"
import { useEffect } from 'react'
import Button from "./Button"

export default function SideBar({ sideBarState, setSideBarState }) {
    // useEffect(() => {
    //     let sideBar = document.querySelector('.sidebar')
    //     let sideLinks = document.querySelectorAll('.side-links a')
    //     console.log(sideLinks)
    //     sideLinks.forEach(link => {
    //         link.onclick = (e) => {
    //             sideBar.classList.toggle('display-menu')
    //             setSideBarState(!sideBarState)
    //         }
    //     })
    // })

    return (
        <div className="sidebar grid place-items-center fixed w-[300px] h-screen bg-black/60 backdrop-blur-lg right-[-300px] duration-500 z-10">
            <div className="flex flex-col gap-10 text-2xl side-links">
                <Link href="/">Home</Link>
                <Link href="/#events">Events</Link>
                {/* <Link href="/#guests">Guests</Link> */}
                <Link href="/#gallery">Gallery</Link>
                <Link href="/#about-us">About us</Link>
                <Link href="https://imjo.in/Pf7D62">
                    <Button>DJ PASS</Button>
                </Link>
            </div>
        </div>
    )
}
