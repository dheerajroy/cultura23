"use client"

import { useState } from 'react'
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'

export default function Nav() {
    const [sideBarState, setSideBarState] = useState(false)
    return (
        <>
            <NavBar sideBarState={sideBarState} setSideBarState={setSideBarState} />
            <SideBar sideBarState={sideBarState} setSideBarState={setSideBarState} />
        </>
    )
}
