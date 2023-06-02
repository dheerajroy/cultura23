"use client"

import { BiMenuAltRight } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { useState, useEffect } from "react"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'
import Button from "./Button"

export default function NavBar({ sideBarState, setSideBarState }) {
    // useEffect(() => {
    //     let sideBar = document.querySelector('.sidebar')
    //     let toggleMenu = document.querySelector('.toggle-menu')
    //     toggleMenu.onclick = () => {
    //         sideBar.classList.toggle('display-menu')
    //         setSideBarState(!sideBarState)
    //     }
    // })

    return (
        <nav className='fixed top-0 bg-black/50 w-full px-6 py-2 flex justify-center md:justify-between items-center flex-wrap gap-5 backdrop-blur-lg z-20'>
            <Link href="/">
                <Image src={logo} width={145} alt="" />
            </Link>
            {/* <div className='nav-links'>
                <Link href="/">Home</Link>
                <Link href="/#events">Events</Link>
                <Link href="/#guests">Guests</Link>
                <Link href="/#gallery">Gallery</Link>
                <Link href="/#about-us">About us</Link>  */}
                <span className="hidden md:block">
                    <Link href="https://imjo.in/Pf7D62"><Button>DJ PASS</Button></Link>
                </span>
            {/* </div> */}
            {/* <div className="lg:hidden toggle-menu text-5xl">
                {!sideBarState ? <BiMenuAltRight /> : <AiOutlineClose />}
            </div>  */}
        </nav>
    )
}
